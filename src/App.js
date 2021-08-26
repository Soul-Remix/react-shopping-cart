import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import Overlay from './components/Overlay';
import Checkout from './components/Checkout';
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState([]);

  const handleShow = () => {
    setShow(!show);
  };

  const handleorder = (item) => {
    setOrder((old) => old.concat(item));
  };

  const handleAddMore = (item) => {
    setOrder(
      order.map((x) => {
        if (x.id === item.id) {
          x.quantity += 1;
        }
        return x;
      })
    );
  };

  const handleRemove = (item) => {
    if (item.quantity - 1 !== 0) {
      setOrder(
        order.map((x) => {
          if (x.id === item.id) {
            x.quantity -= 1;
          }
          return x;
        })
      );
    } else {
      setOrder(order.filter((x) => x.id !== item.id));
    }
  };

  return (
    <>
      <NavBar handleClick={handleShow} sold={order} />
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact>
        <ShopPage addToCart={handleorder} order={order} />
      </Route>
      <Route path="/shop/:id" component={ShopPage} exact>
        <ShopPage addToCart={handleorder} order={order} />
      </Route>
      <Route path="/shop/:category/:id">
        <ShopPage addToCart={handleorder} order={order} />
      </Route>
      <Route path="/about" component={AboutPage} />
      {show && (
        <>
          {' '}
          <Overlay />
          <Checkout
            hideShow={handleShow}
            order={order}
            plus={handleAddMore}
            minus={handleRemove}
          />
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
