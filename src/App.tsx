import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import Usersetupuser from 'Components/usersetupuser';
import Userroless from 'Components/userroless';
function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/usersetupuser" element={<Usersetupuser />} />
        <Route path="/dashboard/usersetupuser/usersetupuser" element={<Usersetupuser />} />
        <Route path="/dashboard/usersetupuser/Userroless" element={<Userroless />} />
        <Route path="/dashboard/Userroless" element={<Userroless />} />
        <Route path="/dashboard/Userroless/usersetupuser" element={<Usersetupuser />} />
        <Route path="/dashboard/userroless/usersetupuser/userroless" element={<Userroless />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
