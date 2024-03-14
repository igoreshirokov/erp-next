import { LabelInput, LabelTextarea } from "@/components/forms/input"
import { useState } from "react"
import { useWmsState } from "./context"
import styles from './productlist.module.css'

const FormDocument = ({type}) => {
    const [fields, setFields] = useState([
        {
            name: 'name',
            type: 'text',
            label: 'Номер заказа',
            value: '',
        },
        {
            name: 'manager',
            type: 'text',
            label: 'Менеджер',
            value: '',
        },
        {
            name: 'client',
            type: 'text',
            label: 'Клиент',
            value: '',
        },
        {
            name: 'phone',
            type: 'number',
            label: 'Телефон',
            value: '',
        },
        {
            name: 'address',
            type: 'longtext',
            label: 'Адрес',
            value: '',
        },
        {
            name: 'comments',
            type: 'longtext',
            label: 'Комментарии',
            value: '',
        }
    ])
    const {state, dispatch} = useWmsState()

    const handler = (e) => {
        setFields(() => {
            return fields.map(field => {
                if (e.target.name == field.name) {
                    field.value = e.target.value
                }
                return field
            })
        })
    }

    const submit = (e) => {
        e.preventDefault()  
        dispatch({ type: "SEND_ORDER_FORM", payload: fields })    
    }
    if (type == 'Order') {
        return <form className={styles.form} onChange={handler}>
            {fields.map(field => {
                if (field.type != 'longtext') {
                    return <LabelInput 
                        key={field.name + "-key"}
                        value={field.value}
                        name={field.name}
                        type={field.type}
                        >
                            {field.label}
                        </LabelInput>
                }
                    return <LabelTextarea 
                        key={field.name + "-key"}
                        value={field.value}
                        name={field.name}
                        type={field.type}
                        >
                            {field.label}
                        </LabelTextarea>
            })}
            <button onClick={submit}>Сохранить</button>
        </form>
    }
    if (type == 'GoodsIn') {
        return <form>
            GoodsIn form
        </form>
    }
    if (type == 'GoodsOut') {
        return <form>
            GoodsOut form
        </form>
    }
}

export { FormDocument }
