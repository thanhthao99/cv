import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/contexts/home';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Educations from './components/content/Educations';
import Experiences from './components/content/Experiences';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/cv" component={Home} />
            <Switch >
              <Route path="/cv/experiences" component={Experiences} />
              <Route path="/cv/educations" component={Educations} />
  
            </Switch>
        </Router>
    </div>
  );
}

export default App;
