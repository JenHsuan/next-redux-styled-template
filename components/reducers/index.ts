import { combineReducers } from 'redux';
import {templateReducer} from './templateReducer';

const rootReducer = combineReducers({
    templateReducer: templateReducer
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>
