import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import DestinationDetail from './pages/DestinationDetail';
import { TravelData } from './data/travelData';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      setData(TravelData);
      // console.table(TravelData);
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}>
              <Home data={data} />
          </Route>
          <Route path="/destination-details/:id" component={DestinationDetail}>
              <DestinationDetail data={data} />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
