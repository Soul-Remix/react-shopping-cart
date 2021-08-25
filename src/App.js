import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Footer />
    </>
  );
};

export default App;
