"use server"

export async function scrapeAndStoreProduct(porductUrl:string) {
    if(!porductUrl) return;

    try{
      const scrapedProduct = await scrapeAmazonProduct(productUrl)
    } catch (error) {
        throw new Error('failed to update product:$(error.message)') 
    }
}
