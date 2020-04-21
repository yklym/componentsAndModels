import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AsideNav } from './components/AsideNav';
import { Main } from './views/Main';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';
import { TeamsService } from './services/teamService';
import { toast } from 'react-toastify';

import './App.css';

import { AuthService } from './services/authService';
import { DocumentService } from './services/documentService';
import { NewDocumet } from './views/NewDocument';

import { AuthContext } from './contexts/authContext';


toast.configure({
  autoClose: 3000, 
  'hideProgressBar': true,
  'position': toast.POSITION.BOTTOM_RIGHT
});

const App = () => {
  const [navToggled, setNavToggled] = useState(false);
  const [teams, setTeams] = useState(null);
  const [userDocuments, setUserDocumets] = useState(null);
  const [user, setUser] = useState(AuthService.getCurrentUser());

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
      <AuthContext.Provider value={{
        isAuthorised: () => AuthService.isAuthorised(), 
        getCurrentUser: () => AuthService.getCurrentUser(), 
        setUser: user => setUser(user), 
        logout: () => { AuthService.logout(); setUser(null); toast.info('You have been logged out') }, 
      }}>
        <AsideNav navToggled={navToggled} toggleNav={() => setNavToggled(!navToggled)} />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopNav toggleAsideNav={() => setNavToggled(!navToggled)} user={user}/>
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
      </AuthContext.Provider>
    </div>
  )
}



export default App;