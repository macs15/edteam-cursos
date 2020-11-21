import styled from '@emotion/styled';
import React, { useContext } from 'react';
import axiosClient from '../config/axios';
import CursoContext from '../context/CursoContext';

const CardContainer = styled.li`
    list-style: none;
    width: 20%;
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
        padding: 2rem 2rem 1rem 2rem;
        height: auto;
        .title-container {
            a {
                text-decoration: none;
                font-size: 1.4rem;
            }
        }
        .description-text {
            padding: 1rem 0;
            font-size: 1.4rem;
            color: #697477;
        }
    }
    .tag {
        padding: 1rem;
        margin-top: auto;

        .aviable {
            color: green;
        }
        .soon {
            color: #5e5eff;
        }
    }
    .footer {
        display: flex;
        justify-content: space-between;
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

const CursoPreview = ({curso}) => {
    const { id, nombre, author, imagen, disponible, precio, descripcion } = curso;
    const { obtenerCursos } = useContext(CursoContext);
    const eliminarCurso = async () => {

        const res = window.confirm('Realmente quieres borrar este curso?');
        if(res) {
            try {
                await axiosClient.delete(`/cursos/${id}`);
                obtenerCursos();
                window.alert('Curso eliminado');
            } catch (e) {
                window.alert('No se pudo eliminar este curso');
            }
        }
    }

    return ( 
        <CardContainer>
            <div className="img-container">
                <img src={imagen} alt={nombre} />
            </div>
            <div className="details-container">
                <div className="title-container">
                    <a href={`/cursos/${id}`}>
                        <h3 title={nombre}>{nombre}</h3>
                    </a>
                    <p className="description-text" title={descripcion}>{descripcion}</p>
                </div>
            </div>
            <div className="tag">
                {disponible ? <p className="aviable">Disponible</p> : <p className="soon">Próximamente</p>}
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
                    <button onClick={() => eliminarCurso()} className="btn btn-delete">Eliminar</button>
                </div>
            </ButtonsContainer>
        </CardContainer>
     );
}
 
export default CursoPreview;