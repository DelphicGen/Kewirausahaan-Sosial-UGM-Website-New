import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderImage from './pages/HeaderImage/HeaderImage';
import AboutUs from './pages/AboutUs/AboutUs';
import UpcomingEvents from './pages/UpcomingEvents/UpcomingEvents';
import Curriculum from './pages/Curriculum/Curriculum';
import LatestEvent from './pages/LatestEvent/LatestEvent';
import OurMentor from './pages/OurMentor/OurMentor';
import OurTeam from './pages/OurTeam/OurTeam';

function App() {
  return (
    <div className="App">
      <HeaderImage />
      <AboutUs />
      <UpcomingEvents />
      <Curriculum />
      <LatestEvent />
      <OurTeam />
      <OurMentor />
    </div>
  );
}

export default App;
