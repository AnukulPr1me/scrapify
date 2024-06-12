"use server";
import { scrapeAmazonProduct } from "../scraper";
export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
  } catch (error) {
    throw new Error("failed to update product:$(error.message)");
  }
}
