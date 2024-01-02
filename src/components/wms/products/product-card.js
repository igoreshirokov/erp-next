import styles from './productlist.module.css'

const ProductCard = ({product}) => {
    return <div className={styles.productCard}>
        id: {product.id}; 
        name: {product.name}
    </div>
}

export { ProductCard }