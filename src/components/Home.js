import React from 'react';
import styled from '@emotion/styled';
import Cursos from './Cursos';
import Navegacion from './Layout/Navegacion';

const Container = styled.div`
    width: 100%;
    min-width: 100vh;
    height: 100%;
    padding: 0 2rem;
    background-color: #fbfbfe;
    margin-top: 70px;
`;
const Home = () => {
    return ( 
        <Container>
            <Navegacion />
            <Cursos/>
        </Container>
     );
}
 
export default Home;