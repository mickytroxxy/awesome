export type Shop = {
    id:number,
    title:string,
    price:number,
    description:string,
    image:string,
    rating:string,
    category:string,
    quantity?:number
}
export type Categories = {
    category:string,
    selected:boolean
}