import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import UpcomingEvents2 from './pages/UpcomingEvents2/UpcomingEvents2';
import UpcomingEvent from './pages/UpcomingEvent/UpcomingEvent';
import Articles2 from './pages/Articles2/Articles2';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/events">
            <UpcomingEvents2 />
          </Route>
          <Route path="/event">
            <UpcomingEvent />
          </Route>
          <Route path="/articles">
            <Articles2 />
          </Route>

          {/* <Route path="/channel">
            <Room checkAuthenticated={checkAuthenticated} />
          </Route>
          <Route path="*" component={NotFoundPage} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
