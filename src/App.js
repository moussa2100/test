import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboar';
import ProjectDetails from './components/project/projectdetails';

function App() {
  return (
    <BrowserRouter>
          <div className="App">


          <Navbar />

          <Switch>
          <Route exact path='/project/:id' component={ ProjectDetails } />
            <Route path='/' component={Dashboard} />
           
          </Switch>
          </div>
    </BrowserRouter>
  );
}

export default App;
