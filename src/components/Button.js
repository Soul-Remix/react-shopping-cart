import { Link } from 'react-router-dom';

const Button = ({ children, value, category }) => {
  return (
    <Link
      className="p-4 text-left m-2 text-green-600 hover:text-green-400 transition transform hover:-translate-y-2 border-b-2 border-gray-200 hover:border-gray-500 first:mt-10"
      to={`/shop${category}${value}`}
    >
      {children}
    </Link>
  );
};

export default Button;
