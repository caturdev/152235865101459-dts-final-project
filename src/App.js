import { Routes, Route } from "react-router-dom";
import AuthBackend from "./components/AuthBackend";
import AuthFrontend from "./components/AuthFrontend";
import Dashboard from "./containers/backend/Dashboard";
import DetailEvent from "./containers/backend/DetailEvent";
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
        path="/dashboard"
        element={
          <AuthBackend>
            <Dashboard />
          </AuthBackend>
        }
      />
      <Route
        path="/event/data"
        element={
          <AuthBackend>
            <DetailEvent />
          </AuthBackend>
        }
      />
    </Routes>
  );
}

export default App;
