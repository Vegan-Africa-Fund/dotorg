import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import EmailReducers from '../reducers/email'


const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            Email: EmailReducers
        }),
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}

export default ConfigStore