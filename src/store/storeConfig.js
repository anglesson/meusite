import { createStore, combineReducers } from 'redux'

import siteReducer from './reducers/siteReducer'

const reducers = combineReducers({
    site: function(state, action) {
        return {
            bc: "blue"
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig