import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* ✅ Correct imports (pages is OUTSIDE src) */
import AuthPage from "../pages/AuthPage";
import ResearcherDashboard from "../pages/ResearcherDashboard";
import ParticipantDashboard from "../pages/ParticipantDashboard";
import LandingPage from "../pages/LandingPage";

/* ================= AUTH CHECK ================= */
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth/researcher" replace />;
  }
  return <>{children}</>;
};

/* ================= APP ================= */
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route path="/auth/:role" element={<AuthPage />} />

        {/* Researcher Dashboard */}
        <Route
          path="/dashboard/researcher"
          element={
            <ProtectedRoute>
              <ResearcherDashboard />
            </ProtectedRoute>
          }
        />

        {/* Participant Dashboard */}
        <Route
          path="/dashboard/participant"
          element={
            <ProtectedRoute>
              <ParticipantDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
