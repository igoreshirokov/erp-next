import styles from './modal.module.css'


const Modal = (props) => {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div className={styles.modalHead}>
                    {props.header}
                </div>
                <div className={styles.modalContent}>
                    {props.children}
                </div>
                <div className={styles.modalFooter}>
                    {props.footer}
                </div>
            </div>
        </div>
    )
}

export { Modal }