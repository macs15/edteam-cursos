import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../config/axios";
import Navegacion from "../components/Layout/Navegacion";
import { ButtonsContainer, Container, RedirContainer } from "./utils/styledComponents";
import { useRouter } from "next/router";
import Link from "next/link";

const Curso = () => {
  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const location = useLocation(); // obtiene ubicacion actual para el get con axios
  const router = useRouter(); // router react

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
        router.push("/cursos");
      } catch (e) {
        window.alert("No se pudo eliminar este curso");
      }
    }
  }

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
                  <Link href={`/cursos/editar/${curso.id}`}>
                    <button className="btn btn-edit">
                      Editar
                    </button>
                  </Link>
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
            <Link href="/cursos">Volver a los cursos</Link>
          </RedirContainer>
        </>
      ) : (
        <RedirContainer>
          <h2> Parece que no encontramos lo que estás buscando...</h2>
          <Link href="/cursos">Volver a los cursos</Link>
        </RedirContainer>
      )}
    </Container>
  );
};

export default Curso;
