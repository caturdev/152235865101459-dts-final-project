import { Routes, Route } from "react-router-dom";
import AuthFrontend from "./components/AuthFrontend";
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
    </Routes>
  );
}

export default App;
