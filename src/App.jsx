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
            <Link to="/contacts-react/">Contacts</Link>
            <Link to="/contacts-react/add">Add Contacts</Link>
          </nav>
        </div>
      </header>
      <div className="container">
        <Switch>
          <Route path="/contacts-react/" exact>
            <List/>
          </Route>
          <Route path="/contacts-react/add">
            <Add/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
