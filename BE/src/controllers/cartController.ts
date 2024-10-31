import { Request, Response } from "express";
import * as cartService from "../services/cartServices";

export const getAllCart = async (req: Request, res: Response) => {
    try {
        const dataProduct = await cartService.getAllCart();

        res.status(200).json(dataProduct);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};

export const createCart = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const dataCart = await cartService.createCart(body);

        res.status(200).json(dataCart);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};

// CartItem
export const getAllCartItem = async (req: Request, res: Response) => {
    try {
        const dataProduct = await cartService.getAllCartItem();

        res.status(200).json(dataProduct);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};

export const createCartItem = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const dataCartItem = await cartService.createCartItem(body);

        res.status(200).json(dataCartItem);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};
export const deleteAllCartItem = async (req: Request, res: Response) => {
    try {
        const dataProduct = await cartService.deleteAllCartItem();

        res.status(200).json(dataProduct);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};