import { useRouter } from 'next/router'
import styled from "@emotion/styled";
import Link from 'next/link'

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
      align-items: center;
  }

  .logo {
      font-size: 2.5rem;
      color: #333;
      font-weight: 700;
      display: inline-block;
      padding-bottom: 1px;
  }
  .link {
    padding: 1rem 2rem;
    color: #5e5eff;
    border-bottom: 1px solid transparent;
    a {
      color: #5e5eff;
    }
    &.btn {
      padding: 0;
      background-color: #5e5eff;
      color: #fff;
      margin-left: 3rem;
      border-radius: 5px;
      a {
        padding: 1rem 2rem;
        display: inline-block;
        color: #fff;
      }
    }

    &.active {
      border-color: var(--azul);
    }
  }

  @media (max-width: 512px) {
    padding: 1rem 1rem;

    .logo {
      font-size: 2rem;
    }
    .link {
      padding: 1rem 1rem;
      &.btn {
        margin-left: 0;
        background-color: transparent;
        a {
          color: var(--azul);
        }
      }
    }
  }
`;
const Navegacion = () => {
  const { pathname } = useRouter();
  return (
    <NavBar>
      <div>
        <a className="logo" href="/">
          EDteam
        </a>
      </div>
      <div>
        
          <div className="links-container">
            <li className={`${pathname === '/' && 'active'}  link`}>
            <Link href="/">Inicio</Link>
            </li>

            <li className={`${pathname === '/cursos' && 'active'}  link`}>
            <Link href="/cursos">Cursos</Link>
            </li>

            {pathname !== "/cursos/nuevo-curso" && (
            <li className="link btn">
              <Link href="/cursos/nuevo-curso">Nuevo curso</Link>
            </li>
            )}
          </div>
      </div>
    </NavBar>
  );
};

export default Navegacion;
