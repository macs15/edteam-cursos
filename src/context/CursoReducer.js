import { OBTENER_CURSOS } from '../types';

const CursoReducer = (state, action) => {
    switch(action.type) {
        case OBTENER_CURSOS:
            return {
                ...state,
                cursos: action.payload
            }
        default:
            return state;
    }
}

export default CursoReducer;