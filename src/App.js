import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

// Components
import CreateUser from './components/CreateUser';
import ShowUserDetails from './components/ShowUserDetails';
import ShowUserList from './components/ShowUserList';
import UpdateUserInfo from './components/UpdateUserInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-3xl m-auto">
        <Routes>
          <Route exact path='/' element={<ShowUserList />} />
          <Route path='/create-user' element={<CreateUser />} />
          <Route path='/user-details/:id' element={<ShowUserDetails />} />
          <Route path='/update-user/:id' element={<UpdateUserInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
