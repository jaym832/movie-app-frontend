import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import MyMoviePage, { MyMoviesPage } from './Pages/MyMoviesPage';
import MyNavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>

        <MyNavBar />

        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>


          <Route path='/movies' component={MyMoviesPage} />



        </Switch>

      </Router>

    </div>
  );
}

export default App;
