import {createStore} from 'redux';
import tasksReducer from './features/tasks/reducer';

const store = createStore(tasksReducer);

export default store;