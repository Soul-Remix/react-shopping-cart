import Button from './Button';

const ShopSideBar = () => {
  return (
    <div className="min-h-screen w-2/12 flex flex-col flex-wrap bg-gray-200 min-w-min">
      <Button value="/men's clothing" category="/category">
        Men's Clothing
      </Button>
      <Button value="/women's clothing" category="/category">
        Women's Clothing
      </Button>
      <Button value="/jewelery" category="/category">
        Jewelery
      </Button>
      <Button value="" category="">
        All
      </Button>
    </div>
  );
};

export default ShopSideBar;
