import React from 'react';
import {Route, withRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersConteiner";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }


    return (
      <div className={'app-wrapper'}>
        <HeaderContainer/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Route path={'/profile/:userId?'}
                 render={() => <ProfileContainer/>}/>
          <Route path={'/dialogs'}
                 render={() => <DialogsContainer/>}/>
          <Route path={'/users'}
                 render={() => <UsersContainer/>}/>
          <Route path={'/login'}
                 render={() => <LoginPage/>}/>


          <Route path={'/news'}
                 component={News}/>
          <Route path={'/music'}
                 component={Music}/>
          <Route path={'/settings'}
                 component={Settings}/>
        </div>
      </div>
    );
  }
}

const mapStateToPropse = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToPropse, {initializeApp}))(App);
