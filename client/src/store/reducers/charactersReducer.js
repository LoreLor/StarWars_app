import { CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_ERROR } from '../actions/characters_actions/actionsTypes.js'

const initialState = {
    characters: [],
    errors: false,
    loading: true
}

export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload.data, // Actualiza el array de personajes con los datos recibidos
      };

    case CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}