import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import TimerCompo from './Compo/TimerCompo';
import LogIn from './Pages/LogIn';
import SignIn from './Pages/SignIn';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

function App() {

  return (
    <div className=" flex items-center justify-center w-screen h-screen">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'> <LogIn /> </Route>
          <Route path='/timer'><TimerCompo /></Route>
          <Route path='/signIn'> <SignIn /> </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );

}

export default App;
