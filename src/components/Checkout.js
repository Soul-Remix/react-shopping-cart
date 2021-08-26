import CheckoutCard from './CheckoutCard';

const Checkout = ({ hideShow, order, minus, plus }) => {
  return (
    <div className="min-h-full w-full md:max-w-2xl bg-white absolute top-0 right-0 z-20 animate-right font-mono">
      <div className="w-4/6 mx-auto mt-20 text-center flex flex-col flex-wrap">
        {order.length === 0 && (
          <div className="text-green-400 mt-52 text-lg mb-20">
            Your cart is Empty visit our shop to add items to your cart
          </div>
        )}
        {order.length > 0
          ? order.map((x) => {
              return <CheckoutCard order={x} minus={minus} plus={plus} />;
            })
          : null}
        {order.length > 0 && (
          <div className="mt-12">
            <p>
              Total:{' '}
              {order.reduce((a, b) => a + b.quantity * b.price, 0).toFixed(2)}
            </p>
          </div>
        )}
        <div className="flex flex-col flex-wrap justify-around">
          <button className="p-4 text-center m-2 text-green-600 hover:text-green-400 transition transform hover:-translate-y-2 border-b-2 border-gray-200 hover:border-gray-500 first:mt-10">
            CheckOut
          </button>
          <button
            onClick={hideShow}
            className="p-4 text-center m-2 text-red-600 hover:text-red-400 transition transform hover:-translate-y-2 border-b-2 border-gray-200 hover:border-gray-500 first:mt-10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
