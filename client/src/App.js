import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageHeader from './components/PageHeader';
import HomePage from './components/HomePage';
import SubPizza from './components/SubPizza';
import SubBurger from './components/SubBurger';
import CartPage from './components/CartPage';

function App() {
  
  return (
    
    <div className="App">
      <Router>
      <PageHeader />
      <Switch>
      <Route path="/pizza"><SubPizza /></Route>
      <Route path="/burger"><SubBurger /></Route>
      <Route path="/cart"><CartPage /></Route>
      <Route path="/"><HomePage /></Route>
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
