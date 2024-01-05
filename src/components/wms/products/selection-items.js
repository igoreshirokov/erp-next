'use client'

import { useState } from 'react'
import { useWmsState } from './context'
import styles from './productlist.module.css'
import { wmsDict } from './dict'
import { Modal } from '@/components/modal/modal'
import { EditableTd } from './table'


const SelectionItems = () => {
    const {state, dispatch} = useWmsState()
    const [isOpen, setIsOpen] = useState(false)
    
    const removeItem = (item) => dispatch({type: "REMOVE_SELECTED", payload: item})
    const updateItem = (item, key, newValue) => {
        const newItem = {...item, [key]: newValue}
        dispatch({type: "UPDATE_SELECTED_ITEM", payload: newItem})
    }

    return (
        <div className={styles.selectionItems}>

            <button onClick={() => setIsOpen(!isOpen)}>Показать выбранные товары ({state.selected.length})</button>

            {isOpen && <Modal
                header={<>
                    <button onClick={() => setIsOpen(!isOpen)}>Закрыть</button>
                </>}
                footer={<>
                    <button onClick={() => console.log("Приход")}>Приход</button>
                    <button onClick={() => console.log("Расход")}>Расход</button>
                    <button onClick={() => console.log("Создать заказ")}>Создать заказ</button>
                    
                </>}
            >
                <div className={styles.selectedItemTable}>
                    {!state.selected.length ? <>Нет отложенных товаров</> 
                    : 
                    <table>
                        <thead>
                            <tr>
                                <th>Удалить?</th>
                                {Object.keys(state.selected[0]).map(key => <th>{wmsDict[key]}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {state.selected.map(item => {
                                return <tr>
                                    <td>
                                        <button onClick={() => removeItem(item)}>Удалить</button>
                                    </td>
                                    {Object.keys(item).map(key => {
                                        return <EditableTd value={item[key]} onSave={(newValue) => updateItem(item, key, newValue)}>
                                        </EditableTd>
                                    })}
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
                
            </Modal>}

        </div>
    )
}

export { SelectionItems }