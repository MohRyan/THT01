import { Products } from "@prisma/client"
import db from "../lib/db"

export const getAllProduct = async () => {
    return await db.products.findMany()
}

export const getProduct = async (id: string) => {
    const detailProduct = await db.products.findFirst({
        where: { id }
    })
    if (!detailProduct) {
        throw new Error("Product not found")
    }

    return detailProduct
}

export const createProduct = async (body: Products) => {
    return await db.products.create({
        data: {
            ...body,
            price: +body.price,
            stock: +body.stock
        }
    })
}

export const deleteProduct = async (id: string) => {
    const product = await db.products.delete({
        where: { id }
    })

    if (!product) {
        throw new Error("Product not found")
    }

    return {
        data: product,
        mesaage: "data deleted"
    }
}