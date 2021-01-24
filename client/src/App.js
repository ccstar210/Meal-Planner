import React, { Component } from 'react';
import AppNavBar from './components/layout/AppNavBar';
import ImageBanner from './components/layout/ImageBanner';
import Home from './components/pages/Home';
import Inventory from './components/pages/Inventory';
import Grocery from './components/pages/Grocery';
import Recipes from './components/pages/Recipes';
import Footer from './components/layout/Footer'

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <AppNavBar />
            <ImageBanner></ImageBanner>
            <Route exact path="/" component={Home} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/grocery" component={Grocery} />
            <Route path="/recipes" component={Recipes} />
            <Footer></Footer> 
          </div>
        </Provider>
      </Router>
    )
  }
}


export default App;
