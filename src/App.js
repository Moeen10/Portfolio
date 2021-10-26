import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Buses from './components/Buses/Buses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
// import Shop from './components/Shop/Shop';

import Header from './Header/Header';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header/>
<Switch>
  <Route path="/login">
    <Login/>
  </Route>
  <Route path="/home">
  <Home/>
  </Route>
  <Route path="/bus">
  <Buses/>
  </Route>
  <Route path="/profile">
  <Profile/>
  </Route>
</Switch>
</BrowserRouter>
    
    
    </div>
  );
}

export default App;
