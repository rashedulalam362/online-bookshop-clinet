import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOrder from './components/CheckOrder/CheckOrder';
import AddBook from './components/AddBook/AddBook';
import MangeOrder from './components/MangeOrder/MangeOrder';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
    <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addBook">
            <AddBook />
          </Route>
          <PrivateRoute path="/book/:bookId">
            <CheckOrder />
          </PrivateRoute>
          <PrivateRoute path="/manageOrder">
            <MangeOrder />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
