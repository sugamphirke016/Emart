export interface product {
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string,
    gallery: string,
    id:number,
    quantity: undefined | number,
    productId: undefined | number
}

export interface signUp {
    name: string,
    username: string,
    email: string,
    phoneNo: string,
    password: string,
}

export interface login {
    username: string,
    password: string
}

export interface cart {
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string,
    id:number|undefined,
    quantity: undefined | number,
    userId: number,
    productId: number
}

export interface priceSummary {
    price: number,
    discount: number,
    tax: number,
    delivery: number,
    total: number
}

export interface quant {
    "quantity": undefined | number
}