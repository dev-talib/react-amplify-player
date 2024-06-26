import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './config/routeConfig';
import PrivateRoute from './PrivateRoute';
import NavBar from './components/NavBar/NavBar';
import StructuredData from './StructuredData';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import { useSelector } from 'react-redux';

import './App.css';
import UploadForm from './pages/upload/UploadForm';
import Songs from './components/Songs';
// import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import ChartsPage from './pages/ChartsPage/ChartsPage';
import Player from './pages/Player/Player';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <Songs/> */}
      <Router>
        <Routes>
          {/* public routes */}
          <Route exact path="/" element={<Home />} /> 
          {/* Show the login page only if the user is not authenticated */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />   
          <Route
             path="/signup"
             element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
          />  
          <Route
             path="/chart"
             element={<ChartsPage/>}
          />  
           <Route
             path="/player"
             element={<Player/>}
          />  
          
          {/* private routes */}
          <Route element={<PrivateRoute />}>
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            <Route path='/upload' element={<UploadForm/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
      <StructuredData />
      {/* <MusicPlayer/> */}
    </div>
  );
}

export default App;
