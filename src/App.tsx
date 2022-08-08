import { Routes, Route } from "react-router-dom";

import { UserProvider } from "context/UserContext";

import { ProtectedRoute } from "utils/ProtectedRoute";

import InitialPage from "pages/UserPage";
import CardsPage from "pages/CardsPage";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route
          path="/cards"
          element={
            <ProtectedRoute>
              <CardsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
