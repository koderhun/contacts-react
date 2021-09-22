import React from 'react';
import {Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List';

function App() {
  return (
    <Router>
      <header>
        <div className="container">
          <nav>
            <Link to="/">Contacts</Link>
            <Link to="/add">Add Contacts</Link>
          </nav>
        </div>
      </header>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <List/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
