import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/store'


import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import ListRumah from './pages/ListRumah/ListRumah'
import PrivateRoute from './helpers/PrivateRoute' 


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header/>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/register">
                <Register/>
              </Route>
              <Route exact path="/rumah-dijual">
                <ListRumah/>
              </Route>
              <PrivateRoute exact path="/userprofile">
                <Profile/>
              </PrivateRoute>

          </Switch>
          <Footer/>
        </Router>
        
      </Provider>      
      
    </div>
  );
}

export default App;
