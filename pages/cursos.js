import React from "react";
import styled from "@emotion/styled";
import Navegacion from "../src/components/Layout/Navegacion";
import ListadoCursos from "../src/components/ListadoCursos";
import axiosClient from "../src/config/axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  background-color: #fbfbfe;
  margin-top: 70px;
`;
const Home = ({ cursos }) => {
  
  if (!cursos) return null
    return (
    <Container>
      <Navegacion />
      <ListadoCursos cursos={cursos} />
    </Container>
  );
};

export const getStaticProps = async () => {
  const res = await axiosClient.get("/cursos");

  return {
    props: {
      cursos: res.data,
    }
  };
};

export default Home;
