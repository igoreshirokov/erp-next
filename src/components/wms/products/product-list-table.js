'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './productlist.module.css'
import { wmsDict } from './dict'
import { useWmsState } from './context'

const ProductListTable = ({products}) => {
    const [list, setList] = useState([])
    const searchRef = useRef()
    const {state,dispatch} = useWmsState()
    
    
    useEffect(() => {
        setList(products)
    },[])

    const search = () => {
        setList(() => {
            return products.filter(el => Object
                .values(el)
                .findIndex(val => String(val)
                    .toLowerCase()
                    .indexOf(searchRef.current.value.toLowerCase()) != -1) 
                != -1)
        })
    }

    const selectItem = (product) => {
        dispatch({
            type: 'ADD_SELECTED',
            payload: product
        });
    }

    return (
        <div className={styles.productListTable}>
            <input type="text" ref={searchRef} onChange={search} />
            {list.length <= 0 
            ? <div>Данные загружаются...</div> 
            : <table>
                <thead>
                    <tr>
                        <th></th>
                        {Object.keys(list[0]).map((key, item) => {
                            return <th>
                                {wmsDict[key]}
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {list.map((product, index) => {
                        return <tr>
                            <td>
                                <button onClick={() => selectItem(product)}>Выбрать</button>
                            </td>
                            {Object.values(product).map(el => <td>{el}</td>)}
                        </tr>
                    })}
                </tbody>
            </table>}
        </div>
    )
}


export { ProductListTable }