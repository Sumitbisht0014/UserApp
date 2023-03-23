import ListUser from './views/ListUser';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './views/Header';
import EditUser from './views/EditUser';
import AddUser from './views/AddUser';

import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route exact path="/" element={<ListUser />} />
        <Route path="/userDetail/:id" element={<EditUser/>} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
