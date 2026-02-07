function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number" || currentPrice <= 0 || discount < 0 || discount > 100) {
        return "Invalid";
    }
    const discountTaka = (currentPrice * discount) / 100;
    const discountedPrice = currentPrice - discountTaka;
    return discountedPrice.toFixed(3);
}

console.log(newPrice(14317, 11));
