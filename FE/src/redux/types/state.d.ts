export interface IAuthState {
    token: string;
    user: IUser;
}


export interface IUser {
    id?: number
    fullname?: string
    email?: string
    password?: string
    role?: string
    profile?: string
}

export interface IProduct {
    id?: number
    name_product?: string
    description?: string
    price?: number
    stock?: number
    image?: string
    cartId?: string | null
}

export interface ICart {
    id: string,
    total_price: null,
    quantity: null,
    diskon: null,
    status: null,
    userId: string,
    cartItem: ICartItem
}

export interface ICartItem {
    length: any;
    id: string,
    productId: string,
    status: string,
    cartId: string,
    product: IProduct
}