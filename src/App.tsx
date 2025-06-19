import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import Usersetupuser from 'Components/usersetupuser';
import AnotherUser from 'Components/anotheruser';
function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/usersetupuser" element={<Usersetupuser />} />
        <Route path="/dashboard/usersetupuser/AnotherUser" element={<AnotherUser />} />
      </Routes>
    </Router>
  );
}

export default App;
