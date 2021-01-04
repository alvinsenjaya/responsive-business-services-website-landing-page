import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/business-services-website" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
