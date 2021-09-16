import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';
import Projects from './pages/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
