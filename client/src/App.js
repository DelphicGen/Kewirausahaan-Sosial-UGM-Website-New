import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact>
            <MainPage />
          </Route>
          {/* <Route path="/register">
            <Register checkNotAuthenticated={checkNotAuthenticated} />
          </Route>
          <Route path="/channel">
            <Room checkAuthenticated={checkAuthenticated} />
          </Route>
          <Route path="*" component={NotFoundPage} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
