interface IOrder {

    userName: string;
    products: Array<IProduct>

}

interface IProduct {

    brand: string;
    model: string;
    year: number;
    price: number;

}

export type { IOrder, IProduct }