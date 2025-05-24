import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/useAuth";
import DashboardLayout from "./components/DashboardLayout";
import Branches from "./pages/Branches";
import Roles from "./pages/Roles";
import Users from "./pages/Users";
import CardScheme from "./pages/CardScheme";
import CardProfile from "./pages/CardProfile";
import CardRequest from "./pages/CardRequest";
import Stock from "./pages/Stock";
import Cards from "./pages/Cards";
import AuthorizationList from "./pages/AuthorizationList";
import AuthorizationQueue from "./pages/AuthorizationQueue";
import Trail from "./pages/Trail";
import Account from "./pages/Account";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? children : <Navigate to="/" />;
}

function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated() ? children : <Navigate to="/dashboard" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route path="" element={<Dashboard />} />
            <Route path="branches" element={<Branches />} />
            <Route path="roles" element={<Roles />} />
            <Route path="users" element={<Users />} />
            <Route path="card-scheme" element={<CardScheme />} />
            <Route path="card-profile" element={<CardProfile />} />
            <Route path="card-request" element={<CardRequest />} />
            <Route path="stock" element={<Stock />} />
            <Route path="cards" element={<Cards />} />
            <Route path="authorization-list" element={<AuthorizationList />} />
            <Route
              path="authorization-queue"
              element={<AuthorizationQueue />}
            />
            <Route path="trail" element={<Trail />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
