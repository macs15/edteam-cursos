import React, { useContext } from "react";
import styled from "@emotion/styled";
import CursoPreview from "./CursoPreview";
import CursoContext from "../context/CursoContext";

const Container = styled.main`
  .course-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    .course-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const ListadoCursos = ({ cursos }) => {
  // const { cursos, obtenerCursos } = useContext(CursoContext);
  const {  obtenerCursos } = useContext(CursoContext);

  return (
    <Container>
      <ul className="course-container">
        {cursos?.length > 0 ? (
          cursos.map((curso) => <CursoPreview key={curso.id} curso={curso} />)
        ) : (
          <div> No hay cursos para mostrar</div>
        )}
      </ul>
    </Container>
  );
};

export default ListadoCursos;
