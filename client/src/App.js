import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { AsideNav } from './components/AsideNav';
import { Test } from './views/Test';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';


const App = () => {
  const [navToggled, setNavToggled] = useState(true);
  return (
    <div id="wrapper">
      <AsideNav navToggled={navToggled} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopNav toggleAsideNav={() => setNavToggled(!navToggled)}/>
          <div className="container-fluid">
            <Switch>
              <Route exact path='/home' component={Test} />
              <Redirect to="/home" />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}



export default App;