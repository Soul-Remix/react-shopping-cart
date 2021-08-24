import NavBar from './components/NavBar';
import { Route } from 'react-router';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={HomePage} />
    </>
  );
};

export default App;
