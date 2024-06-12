export function extractPrice(...elements: any) {
    for (const element of elements) {
        const priceText = element.text().trim();
        if (priceText) {
            return parseFloat(priceText.replace(/[^\d.-]/g, ''));
        }
    }
    return null;  // Return null if no price is found
}
