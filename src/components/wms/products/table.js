import { useEffect, useRef, useState } from "react"

const EditableTd = ({value, onSave}) => {
    const [ editMode, setEditMode ] = useState(false)
    const [ editedValue, setEditedValue ] = useState(value)
    const inputRef = useRef()

    const acceptEdit = () => {
        setEditedValue(inputRef.current.value)
        onSave(inputRef.current.value)
        setEditMode(!editMode)
    }

    const enableEditor = () => {
        inputRef.current.contentEditable = true;
    }

    const setType = (valueFrom, valueTo) => {
        switch (typeof valueFrom) {
            case 'number':
                return Number(valueTo)
            case 'string':
                return String(valueTo)
            case 'boolean':
                return Boolean(valueTo)
            default:
                return String(valueTo)
        }
    }

    const editorListener = (e) => {
        if (e.key && e.key != 'Enter') {
            return
        }
        inputRef.current.contentEditable = false;
        setEditedValue(setType(editedValue, inputRef.current.innerText.replace('\n', '')))
    }

    useEffect(() => {
        onSave(editedValue)
    }, [editedValue])

    return (
        <td 
            onKeyUp={editorListener}
            onBlur={editorListener}
            ref={inputRef} 
            onClick={() => enableEditor()}>
            {editedValue}
        </td>
    )
}

export { EditableTd }