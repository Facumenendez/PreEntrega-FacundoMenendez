import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h3>Venta de Camisetas de la NBA</h3>
      </Link>
      <div>
        <NavLink
          to={"/category/Camisetas de los Celtics"}
          classname={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          {" "}
          Camisetas de los Celtics
        </NavLink>
        <NavLink
          to={"/category/Camisetas de los Warriors"}
          classname={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          {" "}
          Camisetas de los Warriors
        </NavLink>
        <NavLink
          to={"/category/Camisetas de los Lakers"}
          classname={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          {" "}
          Camisetas de los Lakers
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
