import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="flex justify-around flex-wrap p-4 bg-gray-900 text-white items-center font-mono">
      <div>
        <Link
          to="/"
          className="text-5xl text-center text-green-400 block hover:text-green-500 p-5 uppercase font-bold"
        >
          Fake Store
        </Link>
      </div>
      <nav>
        <ul className="text-xl flex items-center md:text-2xl">
          <li className="inline px-3 py-4 transform hover:scale-110 transition-all duration-300">
            <NavLink
              to="/"
              className="p-3 border-b-2 border-black hover:border-green-400"
              activeClassName="selected"
            >
              Home
            </NavLink>
          </li>
          <li className="inline px-3 py-4 transform hover:scale-110 transition-all duration-300">
            <NavLink
              to="/shop"
              className="p-3 border-b-2 border-black hover:border-green-400"
              activeClassName="selected"
            >
              Shop
            </NavLink>
          </li>
          <li className="inline px-3 py-4 transform hover:scale-110 transition-all duration-300">
            <NavLink
              to="/about"
              className="p-3 border-b-2 border-black hover:border-green-400"
              activeClassName="selected"
            >
              About
            </NavLink>
          </li>
          <li className="inline p-3 relative bg-gray-600 rounded-full transform hover:scale-110 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 inline cursor-pointer stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {props.sold > 0 && (
              <span className="absolute bottom-0 left-0 text-sm  bg-green-400 p-1 rounded-full text-black -m-1">
                99
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
