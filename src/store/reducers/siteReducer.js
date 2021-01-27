import {
    SITE_UPDATE,
} from '../actions/actionTypes'

const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case SITE_UPDATE: 
            return {
                ...state,
                min: action.payload
            }
        default:
            return state
    }
}