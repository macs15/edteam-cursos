import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../config/axios";
import Navegacion from "./Layout/Navegacion";
import styled from "@emotion/styled";

const Container = styled.main`
  margin-top: 70px;

  .loading-text {
    margin: 1rem auto;
    text-align: center;
  }

  .container {
     min-height: 400px; 
     background-color: #eff3f5;
     padding: 4rem;

     div {
       max-width: 1200px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row-reverse;
        margin: 0 auto;

        .img-container {
          width: 50%;
          background-size: cover;
          img {
            border-radius: 10px;
            width: 100%;
          }
        }
        .info-container {
          width: 50%;
          display: flex;
          flex-direction: column;
          padding: 0 2rem;

          .title {
            padding: 2rem;
          }
          .description {
            color: #697477;
          }
          .tag {
            margin-top: 4rem;
            color: #fff;
            display: inline-block;
            padding: 1rem 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: auto;
            margin-top: auto;

            &.soon {
              background-color: #347cf5;
            }
            &.aviable {
              background-color: green;
            }
          }
        }
     }
    }
`;

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    background-color: var(--azul);
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 5rem;
  }
`;

const Curso = () => {
  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const location = useLocation(); // obtiene ubicacion actual para el get con axios

  useEffect(() => {
    obtenerCurso();

    //eslint-disable-next-line
  }, []);

  const obtenerCurso = async () => {
    try {
      const resultado = await axiosClient.get(`${location.pathname}`);

      setCurso(resultado.data); // obtiene y guarda el curso actual
      setCargando(false); // oculta 'cargando'
    } catch (error) {
      // console.log(error);
      setCargando(false);
    }
  };

  // retorna mensaje cargando mientras hace la consulta
  if (cargando)
    return (
      <Container>
        <Navegacion />
        <p className="loading-text">Cargando...</p>
      </Container>
    );
  
  return (
    <Container>
      <Navegacion />
      {curso ? 
      <div className="container">
          <div>
            <div className="img-container"><img src={curso.imagen} alt={curso.titulo} /></div>
            <div className="info-container">
              <h1 className="title">{curso.nombre}</h1>
              <p className="description">{curso.descripcion}</p>
              {curso.disponible ? <span className="tag aviable">Disponible</span> : <span className="tag soon">Próximamente</span>}
            </div>
          </div>
      </div> 
      
      
      
      : 
      <NotFound>
        <h2> Parece que no encontramos lo que estás buscando...</h2>  
        <a href="/cursos">Volver a los cursos</a>
      </NotFound>}
    </Container>
  );
};

export default Curso;
