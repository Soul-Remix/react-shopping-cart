import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import ItemPage from './ItemPage';

const fetchItems = async (id, category) => {
  try {
    if (id === undefined) id = '';
    if (category === undefined) category = '';
    const res = await fetch(
      `https://fakestoreapi.com/products/${category}/${id}`
    );
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
};

const ShopItems = ({ addToCart, order }) => {
  const { id: itemId, category } = useParams();
  const { data, isLoading, isError } = useQuery(['items', itemId], async () => {
    const data = await fetchItems(itemId, category);
    return data;
  });

  if (isLoading) {
    return (
      <div className="text-center h-screen m-10 w-9/12">
        <span>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black inline"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>{' '}
        Loading{' '}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen m-10 w-9/12 text-red-500 text-lg">
        Error failed to connect to server please try again
      </div>
    );
  }

  if (Array.isArray(data)) {
    return (
      <div className="mb-20 w-9/12 min-h-screen flex flex-col items-center mx-auto relative z-10 md:mb-44 md:grid md:grid-cols-2 lg:grid-cols-3 xl:mb-64 2xl:grid-cols-4 2xl:mb-96 gap-10">
        {Array.isArray(data) &&
          data
            .filter((x) => x.category !== 'electronics')
            .map((item) => {
              return (
                <ItemCard
                  title={item.title}
                  key={item.id}
                  id={item.id}
                  img={item.image}
                  price={item.price}
                  addToCart={addToCart}
                  order={order}
                />
              );
            })}
      </div>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <div className="w-5/6 mx-auto mb-4 mt-20 rounded-lg overflow-hidden flex flex-col justify-even z-10 relative">
        <ItemPage
          title={data.title}
          description={data.description}
          id={data.id}
          img={data.image}
          price={data.price}
          addToCart={addToCart}
          order={order}
        />
      </div>
    );
  }
};

export default ShopItems;
