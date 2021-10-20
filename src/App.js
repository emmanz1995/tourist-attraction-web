import React from 'react';
import './App.scss';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
