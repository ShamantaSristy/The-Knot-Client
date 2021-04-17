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
// import Booking from './components/Booking/Booking/Booking';
import Payment from './components/Payment/Payment';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
        <Route path="/checkout">
        <Payment></Payment>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
