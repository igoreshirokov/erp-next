
const useProducts = async () => {
    const req = await fetch(process.env.URL + '/api/products');
    const res = await req.json();
    const products = await res.data;

    return products;
}

export { useProducts }