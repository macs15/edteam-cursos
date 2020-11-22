import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axiosClient from '../config/axios';
import CursoContext from '../context/CursoContext';
import { ButtonsContainer, CardContainer } from './utils/styledComponents';


const CursoPreview = ({curso}) => {
    const { id, nombre, author, imagen, disponible, precio, descripcion } = curso;
    const { obtenerCursos, seleccionarCurso } = useContext(CursoContext);

    // router de react
    const history = useHistory();

    // elimina el curso seleccionado. PD: más práctico que ponerlo en context
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

    const handleClick = () => {
        // curso actual
        seleccionarCurso(curso);
        // redirecciona al form
        history.push(`/cursos/${id}/editar`)
    }

    return ( 
        <CardContainer>
            <div className="img-container">
                <a href={`/cursos/${id}`}>
                    <img src={imagen} alt={nombre} />
                </a>
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
                    <p>$ {precio > 0 ? precio : 0} USD</p>
                </div>
            </footer>
            <ButtonsContainer>
                <div className="btn-container">
                    <button onClick={() => handleClick()} className="btn btn-edit">Editar</button>
                </div>
                <div className="btn-container">
                    <button onClick={() => eliminarCurso()} className="btn btn-delete">Eliminar</button>
                </div>
            </ButtonsContainer>
        </CardContainer>
     );
}
 
export default CursoPreview;