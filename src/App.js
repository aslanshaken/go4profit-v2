import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './Share/Layout/Layout';

// Forward Address
import AboutMe from './Screens/About Me/AboutMe'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
