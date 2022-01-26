import styles from '../styles/Tasks.module.css'

const Tasks = (props) =>{

    const removeItem = async (id) => {
        const resp = await fetch(`http://localhost:3000/api/todo/?id=${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'  }
        });
        props.setItems(await resp.json());
    }

    return (
        <ul className={styles.tasksList}>
            {props?.items?.map((item) => 
                <li key={item.id}>
                    <span>[#{item.id}]</span> 
                    {item.task} 
                    <button onClick={() => removeItem(item.id)}>X</button>
                </li>)}
        </ul>
    ) 
}

export default Tasks