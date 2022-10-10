import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get Products
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // get Cart
    const saveCart = getStoredCart();
    const initialCart = [];

    console.log(saveCart)

    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = saveCart[id];
            console.log(quantity, id);
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    return {products: products , initialCart: initialCart};
}