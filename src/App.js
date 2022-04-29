import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { NavMenu } from './components/hero/NavMenu';
import { Footer } from './components/footer/Footer';

import SmoothScroll from './components/helpers/SmoothScroll';

export const App = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScroll>
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
        </SmoothScroll>
      </Router>
    </>
  );
};
