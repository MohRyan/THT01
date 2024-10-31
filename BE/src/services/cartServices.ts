import { Cart, CartItem } from "@prisma/client"
import db from "../lib/db"

export const getAllCart = async () => {
    return await db.cart.findMany({
        include: {
            cartItem: {
                include: {
                    product: true
                }
            }
        }
    })
}

export const createCart = async (body: Cart) => {
    const addCart = await db.cart.create({
        data: {
            ...body,
        }
    })

    return addCart
}


// CartItem
export const getAllCartItem = async () => {
    return await db.cartItem.findMany({
        include: {
            product: true
        }
    })
}

export const createCartItem = async (body: CartItem) => {
    const addCart = await db.cartItem.create({
        data: {
            ...body,
        }
    })

    return addCart
}

export const deleteAllCartItem = async () => {
    return await db.cartItem.deleteMany()
}