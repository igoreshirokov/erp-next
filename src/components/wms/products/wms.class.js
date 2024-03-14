import { useWmsState } from "./context"
import { useProducts } from "./useProducts"

class WMS {
    constructor() {
        
        
    }

    getProducts() {
        return useProducts()
    }
    /**
     * Создает заказ в системе управления складом
     */
    createOrder(data) {
        const createOrderUrl = '/api/wms/order'
        const method = 'post'
        fetch(createOrderUrl, {method, body: JSON.stringify(data)})
            .then(r => r.json())
            .then(r => console.log(r))
    }
    /**
     * Регистрирует приход товара
     */
    createGoodsIn() {
        console.log("createGoodsIn")
    }
    /**
     * Регистрирует отгрузку товара
    */
    createGoodsOut() {
        console.log("createGoodsOut")
    }
}
let instance = null

const getWMSInstance = () => {
    if (!instance) {
        instance = new WMS
    }
    return instance
}

const useWMS = () => getWMSInstance()

export { useWMS }