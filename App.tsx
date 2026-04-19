
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ResearcherInfoPage from './pages/ResearcherInfoPage';
import ParticipantPage from './pages/ParticipantPage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import BrandAssetsPage from './pages/BrandAssetsPage';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Simple mock login handler
  const handleLogin = (role: UserRole) => {
    setUser({
      id: '1',
      name: 'Dr. Jane Smith',
      email: 'jane.smith@university.edu',
      role: role,
      isVerified: true
    });
  };

  const handleLogout = () => {
    setUser(null);
  };


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout}/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/researchers/:type" element={<ResearcherInfoPage />} />
            <Route path="/participants" element={<ParticipantPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/brand" element={<BrandAssetsPage />} />
            <Route path="/auth/:role" element={<AuthPage onLogin={handleLogin} />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard user={user} /> : <Navigate to="/auth/researcher" />} 
            />
            <Route 
              path="/admin" 
              element={user?.role === UserRole.ADMIN ? <AdminPanel /> : <Navigate to="/" />} 
            />
          </Routes>
        </main>
        <Footer />

  
      </div>
    </Router>
  );
};

export default App;
