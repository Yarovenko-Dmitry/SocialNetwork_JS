import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
// import Route from "react-router-dom/es/Route";
// import {BrowserRouter} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Route path={'/dialogs'} component={Dialogs}/>
          {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
          <Route path={'/profile'} component={Profile}/>
          <Route path={'/news'} component={News}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/settings'} component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
