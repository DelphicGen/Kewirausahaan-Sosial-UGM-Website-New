import React, {useEffect, useCallback} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainPage from './pages/MainPage/MainPage';
import UpcomingEvents2 from './pages/UpcomingEvents2/UpcomingEvents2';
import UpcomingEvent from './pages/UpcomingEvent/UpcomingEvent';
import Articles2 from './pages/Articles2/Articles2';
import Login from './pages/Login/Login';
import Article3 from './pages/Article3/Article3';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import Axios from 'axios';
import Add from './pages/Add/Add';
import Edit from './pages/Edit/Edit';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Flash from './components/Flash/Flash'


function App() {
  const history = useHistory();
  const {alert: {message, type}} = useSelector(state => state);
  const dispatch = useCallback(useDispatch(), []);

  useEffect(() => {
    let timer
    if(message) {
        timer = setTimeout(function() {
            dispatch({type: '', message: ''});
        }, 3000)
    }
    return () => {
        clearTimeout(timer)
    }
  }, [message, dispatch])

  const checkNotAuthenticated = useCallback(() => {
    return Axios(
      {
        method: 'GET',
        url: 'http://localhost:9000/checknotauthenticated',
        withCredentials: true,
      })
  }, [])

  const checkAuthenticated = useCallback(() => {
    return Axios(
      {
        method: 'GET',
        url: 'http://localhost:9000/checkauthenticated',
        withCredentials: true,
      })
  }, [])

  return (
      <div className="App">
        <Router>
        <Flash message={message} type={type} />
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
            <Route path="/article">
              <Article3 />
            </Route>
            <Route path="/login">
              <Login history={history} checkNotAuthenticated={checkNotAuthenticated} />
            </Route>
            <Route path="/adminDashboard">
              <AdminDashboard history={history} checkAuthenticated={checkAuthenticated} />
            </Route>
            <Route path="/add">
              <Add history={history} checkAuthenticated={checkAuthenticated} />
            </Route>
            <Route path="/edit">
              <Edit history={history} checkAuthenticated={checkAuthenticated} />
            </Route>
            <Route path="/forgot">
              <ForgotPassword />
            </Route>
            <Route path="/reset">
              <ResetPassword />
            </Route>
            <Route path="*" component={NotFoundPage} />

          </Switch>
        </Router>
      </div>
  );
}

export default App;
