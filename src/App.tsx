import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import Usersetupuser from 'Components/usersetupuser';
function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/usersetupuser" element={<Usersetupuser />} />
      </Routes>
    </Router>
  );
}

export default App;
