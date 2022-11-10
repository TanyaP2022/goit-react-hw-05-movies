import { NavigationStyled } from './NavigationStyled';
import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => `${isActive ? "active" : "link"}`;
const Navigation = () => (
  <NavigationStyled>
    <nav>
      <NavLink className={setActive} to="/">
        HOME
      </NavLink>
      <NavLink className={setActive} to="/movies">
        MOVIES
      </NavLink>
    </nav>
    <hr />
    <Outlet />
  </NavigationStyled>
);

export default Navigation;
