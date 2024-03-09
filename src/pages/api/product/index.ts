

import type { NextApiRequest, NextApiResponse } from "next";
import { productCreate , getAllProduct } from "../../../../prisma/product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case "POST":
                const { image, price, title, category } = req.body;
                const newProduct = await productCreate(image, title, category, price); // Corrected parameter order
                return res.status(201).json(newProduct);
            case "GET": 
                const products = await getAllProduct();
                return res.status(200).json(products); 
            default:
                res.status(405).json({ message: "Method Not Allowed" }); 
        }
    } catch (error :any) {
        console.error(error.message); 
        res.status(500).json({ message: "Internal Server Error" }); 
    }
}
