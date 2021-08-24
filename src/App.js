import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route } from 'react-router';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Footer />
    </>
  );
};

export default App;
