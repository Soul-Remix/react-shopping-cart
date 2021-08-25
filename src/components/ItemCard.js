import { Link } from 'react-router-dom';

const ItemCard = ({ title, id, img, price }) => {
  return (
    <div className="w-48 rounded-md overflow-hidden shadow-lg m-8 ml-2 mr-2 md:w-56 2xl:w-64 font-mono flex flex-col justify-between bg-white md:h-xl">
      <Link to={`/shop/${id}`}>
        <img src={img} className="w-full max-h-64" alt={title} />
      </Link>
      <div className="flex content-between flex-col justify-between flex-1 max-h-64">
        <p className="m-4">{title}</p>
        <p className="m-4">Price: {price}$</p>
        <button className="text-center bg-red-400 w-full h-12 py-5">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
