import axios from 'axios'
import { SERVER } from '../../../server'
import { CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_ERROR } from './actionsTypes'




export const getCharacters = () => async(dispatch) => {
        dispatch({
        type: CHARACTERS_REQUEST
    })
    try {
        const { data } = await axios.get(`${SERVER}/characters`)
            dispatch({
                type: CHARACTERS_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type: CHARACTERS_ERROR,
            payload: error.message
        })
    }
}

