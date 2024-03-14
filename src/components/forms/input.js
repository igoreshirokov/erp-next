const LabelInput = (props) => {
    const { children, ...attributes } = props 
    return <label>
        <span>{props.children}</span>
        <input {...attributes} />
    </label>
}
const LabelTextarea = (props) => {
    const { children, ...attributes } = props 
    return <label>
        <span>{props.children}</span>
        <textarea {...attributes} />
    </label>
}

export { LabelInput, LabelTextarea }