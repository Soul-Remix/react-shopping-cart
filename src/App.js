import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" component={ShopPage} exact />
      <Route path="/shop/:id" component={ShopPage} exact />
      <Route path="/shop/:category/:id" component={ShopPage} />
      <Route path="/about" component={AboutPage} />
      <Footer />
    </>
  );
};

export default App;
