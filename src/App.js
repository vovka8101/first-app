import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './assets/common/Preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper__content'>
          <Suspense fallback={<div>Loading...</div>} >
            <Routes>
              <Route path='/profile/:profileId' element={<ProfileContainer />} />
              <Route path='/profile/*' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp;