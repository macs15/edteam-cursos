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

  .logo {
      font-size: 2.5rem;
      color: #333;
      font-weight: 700;
  }
  .link {
    background-color: #5e5eff;
    padding: 1rem 2rem;
    border-radius: 5px;
    a {
      color: #fff;
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
        {location.pathname !== "/nuevo-curso" && (
          <li className="link">
            <a href="/nuevo-curso">Nuevo curso</a>
          </li>
        )}
      </div>
    </NavBar>
  );
};

export default Navegacion;
