import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = async (endPoint: string, method: string, data?: object) => {
    setIsLoading(true);
    try{
      const url = BASE_URL + endPoint;
      const response = await axios({ method, url, data});
      return response.data;
    }catch (error) {
      if(!axios.isCancel(error)) {
        console.log(error);
      }
      return null;
    }finally {
      setIsLoading(false);
    }
  };

  return { isLoading, fetchData };
};

export default useFetch;
