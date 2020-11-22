import React, {useContext} from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import CursoContext from '../../context/CursoContext';

const CustomRoute = ({ component: Component, ...props }) => {

    const { cursoseleccionado } = useContext(CursoContext);
    
    const location = useLocation();

    // se pierde la referencia al recargar por lo que redirecciono al curso
    let string = location.pathname;
    string = string.replace('/editar', '');

    return ( 
        <Route { ...props} render={ props => !cursoseleccionado ? (
            <Redirect to={string} />
        ) : (
            <Component { ...props } />
        )} />
     );
}
 
export default CustomRoute;
