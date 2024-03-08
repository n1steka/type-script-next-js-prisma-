import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const productCreate = async (image: string, title: string, category: string, price: number): Promise<any> => {
    try {
        const product = await prisma.product.create({ 
            data: { 
                image,
                title,
                category,
                price
            }
        });
        return product;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create product');
    }
};

export const getAllProduct = async (): Promise<any[]> => { 
    try {
        const products = await prisma.product.findMany();
        return products;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
    }
};
