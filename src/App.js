import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './Share/Layout/Layout';

// Forward Address
import AboutMe from './Screens/About Me/AboutMe'
import Services from './Screens/Services/Services'
import Contact from './Screens/Contact/Contact'
import Book from './Screens/Book/Book'
import Home from './Screens/Home/Home'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/book'>
            <Book />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
