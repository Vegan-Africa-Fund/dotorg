import {AnyAction} from 'redux'

const EmailReducers = (state = [], action: AnyAction) => {
    switch(action.type) {
        case 'ADD_EMAIL':
            return [...state, action.emailInfo]
        case 'FETCH_EMAIL':
            return action.emailData
        default:
            return state
    }
}

export default EmailReducers