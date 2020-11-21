import { OBTENER_CURSOS, SELECCIONAR_CURSO } from '../types';

const CursoReducer = (state, action) => {
    switch(action.type) {
        case OBTENER_CURSOS:
            return {
                ...state,
                cursos: action.payload
            }
        case SELECCIONAR_CURSO:
            return {
                ...state,
                cursoseleccionado: action.payload
            }
        default:
            return state;
    }
}

export default CursoReducer;