// str.toString() ; Number(str) || 0 ; true/fale
export const purchaseSchema = (data = []) => {
    if (!Array.isArray(data) || data.length < 8) {
        throw new Error("Data array of at least 8 elements");
    }
    const [productId, vendorId, dt, qty, purchasePrice, salePrice, tax, userId] = data;
    return {
        productId: productId.toString(),
        vendorId: vendorId.toString(),
        dt: dt.toString(),
        qty: Number(qty),
        purchasePrice: Number(purchasePrice),
        salePrice: Number(salePrice),
        tax: Number(tax),
        userId: userId.toString(),
        createdAt: new Date().toISOString()
    }
}       
