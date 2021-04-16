import './App.css';
import Home from './components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './components/Home/NavigationBar/NavigationBar';
import BookingHomePage from './components/Booking/BookingHomePage/BookingHomePage';
import AdminHome from './components/Admin/AdminHome/AdminHome';


function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>

      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/booking">
        <BookingHomePage></BookingHomePage>
        </Route>
        <Route path="/admin">
        <AdminHome></AdminHome>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
