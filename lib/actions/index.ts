"use server"

export async function scrapeAndStoreProduct(porductUrl:string) {
    if(!porductUrl) return;

    try{

    } catch (error) {
        throw new Error('failed to update product:$(error.message)') 
    }
}