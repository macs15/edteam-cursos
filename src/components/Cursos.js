import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Curso from './Curso';
import axiosClient from '../config/axios';

const Container = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100%;

    .course-container {
        max-width: 1200px;
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const Cursos = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        obtenerCursos();
    }, []);

    const obtenerCursos = async () => {
        try {
            const resultado = await axiosClient.get('/cursos');

            setCursos(resultado.data);
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Container>
            <ul className="course-container">
                { cursos.length > 0 ? 
                cursos.map( curso => (
                    <Curso key={curso.id} curso={curso} />
                )) : (
                    <div> No hay cursos para mostrar</div>
                )}
            </ul>
        </Container>
    );
}
 
export default Cursos;