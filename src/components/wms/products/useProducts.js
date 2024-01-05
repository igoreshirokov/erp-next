import { useEffect, useState } from "react";


const useProducts = async () => {
    const req = await fetch('/api/products/');
    const res = await req.json();
    const products = await res.data;

    return products;
}

export { useProducts }