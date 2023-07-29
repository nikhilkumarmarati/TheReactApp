import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/TheReactApp">
            <Home />
          </Route>
          <Route  path="/Signup">
            <Signup />
          </Route>
          <Route  path="/Signin">
            <Signin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>

    </div>
    </Router>
    
  );
}

export default App;
