import './App.css';
import Home from './Home';
import ListTable from './ListTable';
import Reduxpage from './Reduxpage';
import { Routes,Route, Navigate } from 'react-router';
import UserProfile from './Userprofile';
import Login from './Login';
import Dashboard from './Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on app load
  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);


  return (
    <div className="App">
        <ListTable/>

      <Routes>
            {/* --------------Dynamic Routing */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserProfile />} /> Dynamic Route */}
            {/* -------------- */}

            {/* --------------Local Session Management */}
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />}/>
           {/* -------------- */}
      </Routes>
    </div>
  );
}

export default App;
