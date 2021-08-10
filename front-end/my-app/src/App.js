import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Teacher from './containers/Teacher'
import Teachers from './containers/Teachers'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/teachers/:id" component={Teacher} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
