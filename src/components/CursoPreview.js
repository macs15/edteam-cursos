import Link from 'next/link'
import { useRouter } from 'next/router'
import axiosClient from '../config/axios'
import { ButtonsContainer, CardContainer } from './utils/styledComponents'

const CursoPreview = ({ curso }) => {
  const { id, nombre, author, imagen, disponible, precio, descripcion } = curso

  // router de react
  const router = useRouter()

  // elimina el curso seleccionado. PD: más práctico que ponerlo en context
  const eliminarCurso = async () => {
    const res = window.confirm('Realmente quieres borrar este curso?')
    if (res) {
      try {
        await axiosClient.delete(`/cursos/${id}`)
        // actualiza los cursos listados para quitar el eliminado
        // obtenerCursos();
        window.alert('Curso eliminado')
      } catch (e) {
        window.alert('No se pudo eliminar este curso')
      }
    }
  }

  const handleClick = () => {
    // redirecciona al form
    router.push(`/cursos/editar/${id}`)
  }

  return (
        <CardContainer>
            <div className="img-container">
                <Link href={`/cursos/${id}`}>
                    <img src={imagen} alt={nombre} />
                </Link>
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
                <div style={{ overflow: 'hidden', marginRight: '1rem' }}>
                    <p title={author} style={{ whiteSpace: 'nowrap' }}>{author}</p>
                </div>
                <div>
                    <p style={{ whiteSpace: 'nowrap' }}>$ {precio > 0 ? precio : 0} USD</p>
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
  )
}

export default CursoPreview
