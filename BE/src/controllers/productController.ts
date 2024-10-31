import { Request, Response } from "express";
import * as productService from "../services/productServices";

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const dataProduct = await productService.getAllProduct();

        res.status(200).json(dataProduct);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const dataProduct = await productService.getProduct(id);

        res.status(200).json(dataProduct);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const dataProduct = await productService.createProduct(body);

        res.status(200).json(dataProduct);
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        });
    }
};