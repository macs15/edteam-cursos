import styled from '@emotion/styled';
import React from 'react';

const CardContainer = styled.li`
    list-style: none;
    width: 20%;
    min-height: 380px;
    background-color: #fff;
    margin: 0 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 0 0 10px 10px;
    .img-container {
        width: 100%;
        img {
            border-radius: 10px 10px 0 0;
            width: 100%;
            background-position: center;
            background-size: cover; 
        }
    }

    .details-container {
        padding: 2rem;
        .title-container {
            a {
                text-decoration: none;
            }
        }
    }
    .footer {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        height: auto;
        padding: 1rem;
        background-color: #e0e1e1;
    }
`;
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;

    .btn-container {

    }
    .btn {
        border: none;
        padding: 1rem 2rem;
        border-radius: 5px;
        color: #fff;

        &.btn-edit {
            background-color: green;
        }
        &.btn-delete {
            background-color: #ff4141;
        }
    }
`;

const Curso = ({curso}) => {
    const { titulo, author, disponible, precio, descripcion } = curso;

    return ( 
        <CardContainer>
            <div className="img-container">
                <img src='https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png' alt='titulo' />
            </div>
            <div className="details-container">
                <div className="title-container">
                    <a href="#">
                        <h3 title={titulo}>{titulo}</h3>
                    </a>
                    <p title={descripcion}>{descripcion}</p>
                </div>
                <div className="">
                    <p>{disponible ? 'Disponible' : 'Próximamente'}</p>
                </div>
            </div>
            <footer className="footer">
                <div>
                    <p>{author}</p>
                </div>
                <div>
                    <p>{precio} USD</p>
                </div>
            </footer>
            <ButtonsContainer>
                <div className="btn-container">
                    <button className="btn btn-edit">Editar</button>
                </div>
                <div className="btn-container">
                    <button className="btn btn-delete">Eliminar</button>
                </div>
            </ButtonsContainer>
        </CardContainer>
     );
}
 
export default Curso;