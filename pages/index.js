import Navegacion from "../src/components/Layout/Navegacion";
import { HomeContainer } from '../src/components/utils/styledComponents';

const Inicio = () => {
  return (
    <>
      <Navegacion />
      <HomeContainer>
        <h2>Bienvenido a EDteam Cursos</h2>
        <div className="box-banner">
          <div className="container-banner">
            <div className="info-banner">
              <h1>
                Aprende las <span>mejores tecnologías</span> con nuestros cursos
              </h1>
              <p className="text">
                Domina las mejores tecnologías en un solo lugar y conviertete en
                un profesional capaz de lograr grandes resultados. Alístate, qué
                esperas?
              </p>
              <div className="btn-container">
                <a href="/cursos" className="btn">Ver todos los cursos</a>
              </div>
            </div>

            <div className="img-container">
              <img
                src="https://edteam-media.s3.amazonaws.com/courses/big/e7fbb7f9-773c-426a-bbb5-14276a37af33.png"
                alt="Cursos de desarrollo web"
              />
            </div>
          </div>
        </div>
      </HomeContainer>
    </>
  );
};

export default Inicio;