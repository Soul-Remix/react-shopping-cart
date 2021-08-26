const CheckoutCard = ({ order, minus, plus }) => {
  return (
    <div className="flex justify-between mt-10 border-2 border-green-400 shadow-md p-6">
      <div>
        <img src={order.image} alt={order.title} className="w-24" />
      </div>
      <div className="flex flex-col items-center justify-center text-center flex-1">
        <p>{order.title}</p>
        <p>Price: {order.price}$</p>
        <div className="mt-2">
          <button
            className="border-2 border-red-400 p-px mr-2 shadow-md"
            onClick={() => minus(order)}
          >
            -
          </button>
          <input
            type="text"
            value={order.quantity}
            className="w-10 text-center shadow-sm"
          />
          <button
            className="border-2 border-green-400 p-px ml-2 shadow-md"
            onClick={() => plus(order)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
