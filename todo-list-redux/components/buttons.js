import styles from "../styles/Buttons.module.css"

const GenericActionButton = ({action, text, className = "default" }) => <button className={`${styles['button']} ${className}`} onClick={action}>{text}</button>

export const AddButton = ({action}) => GenericActionButton({ action, text: "Add", className: styles.green })
export const EditButton = ({action}) => GenericActionButton({ action, text: "Edit", className: styles.yellow })
export const SaveButton = ({action}) => GenericActionButton({ action, text: "Save changes", className: styles.green })
export const CancelButton = ({action}) => GenericActionButton({ action, text: "Cancel", className: styles.red })
export const RemoveButton = ({action}) => GenericActionButton({ action, text: "Remove", className: styles.red})

