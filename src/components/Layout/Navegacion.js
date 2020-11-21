import React from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 50px;
  height: 50px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  .links-container {
      display: flex;
  }

  .logo {
      font-size: 2.5rem;
      color: #333;
      font-weight: 700;
  }
  .link {
    padding: 1rem 2rem;
    border-radius: 5px;
    color: #5e5eff;
    a {
      color: #5e5eff;
    }
    &.btn {
      background-color: #5e5eff;
      color: #fff;
      margin-left: 3rem;
      a {
        color: #fff;
      }
    }
  }
`;
const Navegacion = () => {
  const location = useLocation();

  return (
    <NavBar>
      <div>
        <a className="logo" href="/">
          EDteam
        </a>
      </div>
      <div>
        
          <div className="links-container">
            <li className="link">
            <a href="/cursos">Cursos</a>
          </li>
          {location.pathname !== "/cursos/nuevo-curso" && (
          <li className="link btn">
            <a href="/cursos/nuevo-curso">Nuevo curso</a>
          </li>
          )}
          </div>
      </div>
    </NavBar>
  );
};

export default Navegacion;
