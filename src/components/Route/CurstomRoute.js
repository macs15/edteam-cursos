import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import CursoContext from '../../context/CursoContext';

const CustomRoute = ({ component: Component, ...props }) => {

    const { cursoseleccionado } = useContext(CursoContext);

    return ( 
        <Route { ...props} render={ props => !cursoseleccionado ? (
            <Redirect to="/cursos" />
        ) : (
            <Component { ...props } />
        )} />
     );
}
 
export default CustomRoute;
