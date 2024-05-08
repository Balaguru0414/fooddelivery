import { Link, NavLink } from "react-router-dom";
import { useCarts } from "../../Contexts/CartContext";

const Header = () => {
  const { carts } = useCarts();
  const navlinks = [
    { name: "Home", to: "/home" },
    { name: "Buy", to: "/buy" },
  ];

  return (
    <nav className="bg-red-800 px-4 py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home" className="text-white font-bold text-xl">
              Food Delivery App
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center">
            {navlinks.map((nav, i) => (
              <NavLink
                key={i}
                to={nav.to}
                className="text-white font-bold hover:text-white px-3 py-2"
              >
                {nav.name}
              </NavLink>
            ))}
            <div className="flex">
              <NavLink
                to="/cart"
                className="text-white font-bold hover:text-white px-3 py-2"
              >
                Cart
              </NavLink>
              <div
                className="flex items-center justify-center text-red-500  
              w-5 h-5 bg-white rounded-full font-bold relative right-3"
              >
                {carts?.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
