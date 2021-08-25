const ItemPage = ({ title, id, img, price, description }) => {
  return (
    <div className="w-5/6 mx-auto mb-40 bg-white rounded-lg overflow-hidden flex flex-col justify-even z-10 relative md:grid md:grid-cols-2">
      <img src={img} alt={title} />
      <div>
        <h1 className="font-bold text-lg p-2 mt-6">{title}</h1>
        <p className="text-md p-2 mt-6">{description}</p>
        <p className="text-md text-center mt-6">Price: {price}$</p>
        <button className="text-center bg-red-400 w-full h-16 mt-6 text-lg font-bold">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemPage;