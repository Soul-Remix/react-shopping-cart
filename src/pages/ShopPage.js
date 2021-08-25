import ShopItems from '../components/ShopItems';
import ShopSideBar from '../components/ShopSideBar';

const ShopPage = () => {
  return (
    <div className="flex animate-show">
      <ShopSideBar />
      <ShopItems />
    </div>
  );
};

export default ShopPage;
