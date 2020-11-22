import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axiosClient from "../config/axios";
import Navegacion from "./Layout/Navegacion";
import { ButtonsContainer, Container, RedirContainer } from "./utils/styledComponents";
import CursoContext from "../context/CursoContext";

const Curso = () => {
  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const location = useLocation(); // obtiene ubicacion actual para el get con axios

  const { seleccionarCurso } = useContext(CursoContext);
  const history = useHistory(); // router react

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

  // elimina el curso seleccionado. PD: más práctico que ponerlo en context
  const eliminarCurso = async () => {
    const res = window.confirm("Realmente quieres borrar este curso?");
    if (res) {
      try {
        await axiosClient.delete(`/cursos/${curso.id}`);

        window.alert("Curso eliminado");
        history.push("/cursos");
      } catch (e) {
        window.alert("No se pudo eliminar este curso");
      }
    }
  };

  const handleClick = () => {
    // curso actual
    seleccionarCurso(curso);
    // redirecciona al form
    history.push(`/cursos/${curso.id}/editar`);
  };

  return (
    <Container>
      <Navegacion />
      {curso ? (
        <>
          <div className="container">
            <div>
              <div className="img-container">
                <img src={curso.imagen} alt={curso.titulo} />
              </div>
              <div className="info-container">
                <h1 className="title">{curso.nombre}</h1>
                <p className="description">{curso.descripcion}</p>
                <div className="tags-container">
                  {curso.disponible ? (
                    <span className="tag aviable">Disponible</span>
                  ) : (
                    <span className="tag soon">Próximamente</span>
                  )}
                  {curso.precio > 0 ? (
                    <p className="price">
                      $ {curso.precio}
                      <span>USD</span>
                    </p>
                  ) : (
                    <p className="free-course">Curso gratuito</p>
                  )}
                </div>
                <ButtonsContainer>
                  <button
                    onClick={() => handleClick()}
                    className="btn btn-edit"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarCurso()}
                    className="btn btn-delete"
                  >
                    Eliminar
                  </button>
                </ButtonsContainer>
              </div>
            </div>
          </div>
          <RedirContainer>
            <a href="/cursos">Volver a los cursos</a>
          </RedirContainer>
        </>
      ) : (
        <RedirContainer>
          <h2> Parece que no encontramos lo que estás buscando...</h2>
          <a href="/cursos">Volver a los cursos</a>
        </RedirContainer>
      )}
    </Container>
  );
};

export default Curso;
