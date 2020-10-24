import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Index, MenuOptions} from './components/Templates/IndexTemplate';
import Contact from './components/Templates/ContactTemplate';
export default function App() {
  return (
    <Router>
      <div>
      <MenuOptions />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
