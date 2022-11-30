//Routing import
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Styling imports
import GlobalStyles from '../style/Global.styled';
import StyledApp from './App.styled';

//Components imports
import Header from '../components/header'
import Footer from '../components/footer'

//Pages imports
import Home from '../pages/home'
import Login from '../pages/login'
import Profile from '../pages/profile';
import Error from '../pages/error'
import ProtectedRoute from '../pages/protected-route';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route element={<ProtectedRoute />}>
              <Route path='/profile' element={<Profile/>} />
            </Route>
            <Route path='/*' element={<Error />} />
          </Routes>
          <Footer/>
        </Router>
      </StyledApp>
    </>
  );
}

export default App;