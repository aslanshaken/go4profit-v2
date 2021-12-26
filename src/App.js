import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './Share/Layout/Layout';

// Forward Address
import AboutMe from './Screens/About Me/AboutMe'
import Services from './Screens/Services/Services'
import Contact from './Screens/Contact/Contact'
import Book from './Screens/Book/Book'
import Home from './Screens/Home/Home'
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState()
  return (
    <div className="App">
      <Layout lang={lang} setLang={setLang}>
        <Switch>
          <Route path='/book'>
            <Book lang={lang} setLang={setLang} />
          </Route>
          <Route path='/contact'>
            <Contact lang={lang} setLang={setLang} />
          </Route>
          <Route path='/services'>
            <Services lang={lang} setLang={setLang} />
          </Route>
          <Route path="/about">
            <AboutMe lang={lang} setLang={setLang} />
          </Route>
          <Route path='/'>
            <Home lang={lang} setLang={setLang} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
