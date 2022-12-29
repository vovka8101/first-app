import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile/:profileId' element={<ProfileContainer />} />
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
