import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/login';
import PageLayout from './Components/PageLayout';
import Usersetupuser from './Components/usersetupuser';
import Userroless from './Components/userroless';
import ApiCall from './Components/ApiCall';
import Apicruduse from './Components/Apicruduse';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* All dashboard-related routes go here */}
        <Route path="/dashboard" element={<PageLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="usersetupuser" element={<Usersetupuser />} />
          <Route path="userroless" element={<Userroless />} />
          <Route path="usersetupuser/apiCall" element={<ApiCall />} />
          <Route path="apicruduse" element={<Apicruduse />} />
          <Route path="apicall" element={<ApiCall />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
