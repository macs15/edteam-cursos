import React, { useReducer } from 'react';
import axiosClient from '../config/axios';
import { OBTENER_CURSOS } from '../types';
import CursoContext from './CursoContext';
import CursoReducer from './CursoReducer';

const CursoState = props => {
    const initialState = {
        cursos: [],
    }

    // despachar las acciones
    const [state, dispatch] = useReducer(CursoReducer, initialState);

    const obtenerCursos = async () => {
        try {
            const resultado = await axiosClient.get('/cursos');

            dispatch({
                type: OBTENER_CURSOS,
                payload: resultado.data
            })
        } catch (error) {
            
        }
    }

    return (
        <CursoContext.Provider
            value={{
                cursos: state.cursos,
                obtenerCursos,
            }} 
        >
            {props.children}
        </CursoContext.Provider>
    )

}

export default CursoState;