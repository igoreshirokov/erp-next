import styles from './productlist.module.css'
import { ProductListTable } from './product-list-table';
import { SelectionItems } from './selection-items';
import { useProducts } from './useProducts';


const ProductList = async () => {
    const products = await useProducts()
    
    return (
        <div className={styles.productList}>
            <SelectionItems />
            {products.length && <ProductListTable products={products} />}
        </div>
    )
}


export { ProductList }