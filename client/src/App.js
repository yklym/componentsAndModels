import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AsideNav } from './components/AsideNav';
import { Main } from './views/Main';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';
import { TeamsService } from './services/teamService';

import './App.css';

import { AuthService } from './services/authService';
import { DocumentService } from './services/documentService';
import { NewDocumet } from './views/NewDocument';


const App = () => {
  const [navToggled, setNavToggled] = useState(false);
  const [teams, setTeams] = useState(null);
  const [userDocuments, setUserDocumets] = useState(null);

  if (!teams) {
    TeamsService.getUserTeams(AuthService.currentUser)
      .then(teams => setTeams(teams));
  }

  if (!userDocuments) {
    DocumentService.getUserDocuments('dsfdsfdsf')
      .then(docs => setUserDocumets(docs));
  }


  return (
    <div id="wrapper">
      <AsideNav navToggled={navToggled} toggleNav={() => setNavToggled(!navToggled)} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopNav toggleAsideNav={() => setNavToggled(!navToggled)} />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/home" component={() => <Main teams={teams} documents={userDocuments} />} />
              <Route exact path="/documents/new" component={() => <NewDocumet />}></Route>
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