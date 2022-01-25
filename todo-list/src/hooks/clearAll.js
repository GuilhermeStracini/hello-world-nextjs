import styles from '../styles/Tasks.module.css'

const ClearAll = (props) => {
    const handleClear = async () => {
        const resp = await fetch('http://localhost:3000/api/clear', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'  }
        });

        if(resp.status == 200){
            props.setItems([]);
            return;
        }
        
        alert(`[HTTP ${resp.status}]`);
    }

    if(props.items == 0){
        return ("");
    }

    return (
        <div className={styles.clearAll}>
            <button onClick={handleClear}>Clear all</button>
        </div>
    )
}

export default ClearAll