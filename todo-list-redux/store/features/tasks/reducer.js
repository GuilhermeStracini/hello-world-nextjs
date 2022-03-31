import {
    ADD_TASKS,
    ADD_TASK, 
    REMOVE_TASK,
    REMOVE_ALL_TASKS
} from "./actions"

const tasksReducer = (state = { tasks: [] }, action) => {

    console.log(action)

    switch(action.type){
        case ADD_TASKS:
            return { ...state, tasks: action.payload }

        case ADD_TASK:
            return { ...state, tasks: [ action.payload, ...state.tasks]}
        
        case REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== parseInt(action.payload)) }
        
        case REMOVE_ALL_TASKS:
            return { ...state, tasks: [] }

        default:
            return { ...state }        
    }
}

export default tasksReducer