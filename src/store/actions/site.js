
import {
    SITE_UPDATE
} from './actionTypes'

// Action creator
export function atualizaBC(novoValor) {
    return {
        type: SITE_UPDATE,
        payload: novoValor
    }
}