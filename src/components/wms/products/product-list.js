import styles from './productlist.module.css'
import { ProductListTable } from './product-list-table';
import { SelectionItems } from './selection-items';

const useProducts = () => {
    const productsArr = [];
    for (let i=0;i<=10000;i++) {
        productsArr.push({
            id: i,
            barcode: 100000 + i,
            name: "Product " + i,
            price: 100.00,
        });
    }
    return productsArr
}

const ProductList = () => {
    const products = useProducts()

    
    return (
        <div className={styles.productList}>
            <SelectionItems />
            {products.length && <ProductListTable products={products} />}
        </div>
    )
}


export { ProductList }