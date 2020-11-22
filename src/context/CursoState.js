import React, { useReducer } from 'react';
import axiosClient from '../config/axios';
import { OBTENER_CURSOS, SELECCIONAR_CURSO } from '../types';
import CursoContext from './CursoContext';
import CursoReducer from './CursoReducer';

const CursoState = props => {
    const initialState = {
        cursos: [],
        cursoseleccionado: null,
    }

    // despachar las acciones
    const [state, dispatch] = useReducer(CursoReducer, initialState);

    // listado de cursos
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

    // curso actual a editar
    const seleccionarCurso = curso => {
        dispatch({
            type: SELECCIONAR_CURSO,
            payload: curso
        });
    }

    const comprobarCurso = async id => {
        try {
            const resultado = await axiosClient.get(`/cursos/${id}`);

            return resultado.data;
        } catch (error) {
            return null;
        }
    }

    return (
        <CursoContext.Provider
            value={{
                cursos: state.cursos,
                cursoseleccionado: state.cursoseleccionado,
                existecurso: state.existecurso,
                obtenerCursos,
                seleccionarCurso,
                comprobarCurso
            }} 
        >
            {props.children}
        </CursoContext.Provider>
    )

}

export default CursoState;