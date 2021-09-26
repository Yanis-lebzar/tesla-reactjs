import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { login, logout, selectUser } from "./features/car/userSlice";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import { auth } from "./firebase";
import ModelSX from "./pages/ModelSX";
import data from "./data/carInfo.json";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(data[0]);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/my-account' /> : <Login />}
          </Route>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route exact path='/my-account'>
            {!user ? <Redirect to='/login' /> : <Redirect to='/my-account' />}
            <Header out />
            <Account />
          </Route>

          <Route exact path='/model-s'>
            <Header />
            <ModelSX datas={data[0]} />
          </Route>
          <Route exact path='/model-3'>
            <Header white />
            <ModelSX white datas={data[1]} />
          </Route>
          <Route exact path='/model-x'>
            <Header />
            <ModelSX datas={data[2]} />
          </Route>
          <Route exact path='/model-y'>
            <Header white />
            <ModelSX position white datas={data[3]} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
