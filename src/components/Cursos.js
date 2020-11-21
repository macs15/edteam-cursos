import React from 'react';
import styled from '@emotion/styled';
import Navegacion from './Layout/Navegacion';
import ListadoCursos from './ListadoCursos';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    background-color: #fbfbfe;
    margin-top: 70px;
`;
const Home = () => {
    return ( 
        <Container>
            <Navegacion />
            <ListadoCursos/>
        </Container>
     );
}
 
export default Home;