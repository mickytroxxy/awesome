import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import useFetch from './useFetch';
import {
  setCartItems,
  setCategoryObjects,
  setItems
} from '../state/slices/shop';
import { Categories, Shop } from '../types/type';

const useShop = () => {
  const dispatch = useDispatch();
  const { items, cartItems, categoryObjects } = useSelector((state: RootState) => state.shop);
  const total = cartItems?.reduce((total: number, obj: Shop) => total + (obj.quantity || 0) * obj.price, 0);
  const { isLoading, fetchData } = useFetch();

  const handleCartAction = useCallback((product: Shop, action: 'add' | 'remove') => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (action === 'add') {
      if (existingItem) {
        dispatch(setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item))));
      } else {
        dispatch(setCartItems([...cartItems, { ...product, quantity: 1 }]));
      }
    } else if (action === 'remove') {
      if (existingItem && existingItem.quantity && existingItem.quantity > 1) {
        dispatch(setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: (item.quantity || 0) - 1 } : item))));
      } else {
        dispatch(setCartItems(cartItems.filter((item) => item.id !== product.id)));
      }
    }
  }, [cartItems, dispatch]);

  const handleCategory = useCallback((item: Categories) => {
    dispatch(setCategoryObjects(categoryObjects.map((type) => (type.category === item.category ? { ...type, selected: true } : { ...type, selected: false }))));
  }, [categoryObjects]);

  useEffect(() => {
    const getItems = async () => {
      const response: Shop[] | null = await fetchData('products', 'GET');
      if (response) {
        dispatch(setItems(response));
        const uniqueCategories = [...new Set(response?.map((item) => item.category))];
        dispatch(setCategoryObjects([{ category: 'ALL', selected: true }, ...uniqueCategories.map((category) => ({ category, selected: false }))]));
      }
    };
    getItems();
  }, []);

  return { isLoading, items, handleCartAction, cartItems, handleCategory, total, categoryObjects };
};

export default useShop;
