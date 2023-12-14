import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RequiresAuth from "./RequiresAuth";
import HomePage from "./pages/Homepage";
import LoginForm from "./pages/Login";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequiresAuth>
                <HomePage />
              </RequiresAuth>
            }
          />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
