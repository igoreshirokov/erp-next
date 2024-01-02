'use client'

import { useEffect, useState } from 'react'
import styles from './productlist.module.css'
import { ProductCard } from './product-card';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products/')
            .then(r => r.json())
            .then(r => setProducts(r.data));
    }, []);

    if (products.length) {
        return (
            <div className={styles.productList}>
                {products.map(product => <ProductCard key={'productcardid-' + product.id} product={product} />)}
            </div>
        )
    }
}

export { ProductList }