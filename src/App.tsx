// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login';
import PageLayout from './Components/UM_usersetup/PageLayout';
import Usersetupuser from './Components/UM_usersetup/usersetupuser';
import Userroless from './Components/UM_usersetup/userroless';
import ApiCall from './Components/UM_usersetup/ApiCall';
import Apicruduse from './Components/UM_usersetup/Apicruduse';
import Dashboard from './Components/Dashboard';
import PropsCallback from './Components/UM_setup/PropsCallback';
import AltLayout from './Components/UM_setup/AltLayout';
import Parentupdate from './Components/UM_setup/Parentupdate';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './Components/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={
            <PrivateRoute>
              <PageLayout />
            </PrivateRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="usersetupuser" element={<Usersetupuser />} />
            <Route path="userroless" element={<Userroless />} />
            <Route path="usersetupuser/apiCall" element={<ApiCall />} />
            <Route path="apicruduse" element={<Apicruduse />} />
            <Route path="apicall" element={<ApiCall />} />
          </Route>

          <Route path="/dashboard" element={
            <PrivateRoute>
              <AltLayout />
            </PrivateRoute>
          }>
            <Route index element={<PropsCallback />} />
            <Route path="propscallback" element={<PropsCallback />} />
            <Route path="parentupdate" element={<Parentupdate />} />
          </Route>

          {/* Catch-all for 404 */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
