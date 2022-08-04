import { Routes, Route } from "react-router-dom";
import AuthBackend from "./components/AuthBackend";
import AuthFrontend from "./components/AuthFrontend";
import Dashboard from "./containers/backend/Dashboard";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Registration from "./containers/Registration";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthFrontend>
            <Home />
          </AuthFrontend>
        }
      />
      <Route
        path="/login"
        element={
          <AuthFrontend>
            <Login />
          </AuthFrontend>
        }
      />
      <Route
        path="/registration"
        element={
          <AuthFrontend>
            <Registration />
          </AuthFrontend>
        }
      />
      <Route
        path="/home"
        element={
          <AuthBackend>
            <Dashboard />
          </AuthBackend>
        }
      />
    </Routes>
  );
}

export default App;
