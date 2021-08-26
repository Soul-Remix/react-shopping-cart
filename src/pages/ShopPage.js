import ShopItems from '../components/ShopItems';
import ShopSideBar from '../components/ShopSideBar';

const ShopPage = ({ addToCart, order }) => {
  return (
    <div className="flex animate-show">
      <ShopSideBar />
      <ShopItems addToCart={addToCart} order={order} />
    </div>
  );
};

export default ShopPage;
