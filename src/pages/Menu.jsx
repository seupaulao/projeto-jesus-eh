import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/outras">Outras mensagens</Link>
          </li>
          <li>
            <Link to="/mapa">Estamos próximos a você</Link>
          </li>
          <li>
            <Link to="/ajuda">Ajuda</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;