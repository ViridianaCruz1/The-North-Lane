import { NavLink } from "react-router-dom";

function NavLinkFooter({ children, to }) {
  return (
    <li>
      <NavLink to={to} className="text-gray-600 hover:text-gray-800 transition">
        {children}
      </NavLink>
    </li>
  );
}

export default NavLinkFooter;
