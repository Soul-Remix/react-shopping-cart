import ShopItems from '../components/ShopItems';
import ShopSideBar from '../components/ShopSideBar';

const ShopPage = () => {
  return (
    <div className="flex">
      <ShopSideBar />
      <ShopItems />
    </div>
  );
};

export default ShopPage;
