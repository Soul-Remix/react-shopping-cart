const ItemPage = ({ title, id, img, price, description, addToCart, order }) => {
  const ordered =
    order.filter((x) => {
      return x.id === id;
    }).length > 0;
  return (
    <div className="w-5/6 mx-auto mb-40 bg-white rounded-lg overflow-hidden flex flex-col justify-even z-10 relative md:grid md:grid-cols-2 md:mb-64 md:gap-8 md:h-xl lg:mb-96">
      <img src={img} alt={title} className="w-full md:h-xl" />
      <div>
        <h1 className="font-bold text-lg p-2 mt-6">{title}</h1>
        <p className="text-md p-2 mt-4 lg:text-md">{description}</p>
        <p className="text-md text-center mt-4">Price: {price}$</p>
        <button
          className="text-center bg-red-400 w-full h-16 mt-4 text-lg font-bold rounded-lg hover:bg-red-500 hover:shadow-lg md:py-4 disabled:opacity-50"
          onClick={() =>
            addToCart({
              id: id,
              quantity: 1,
              image: img,
              title: title,
              price: price,
            })
          }
          disabled={ordered}
        >
          {ordered ? 'Already in cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
