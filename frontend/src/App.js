import React, { useState, useEffect } from 'react';
import './App.css';
// Import your existing components
import EnvironmentManager from './components/EnvironmentManager';
import CompareView from './components/CompareView';
import MigrationView from './components/MigrationView';
import RunHistory from './components/RunHistory';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user authenticated via Firebase session token
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // 1. If NOT logged in, show the Splash Welcome screen with "Continue to Login"
  if (!isLoggedIn) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', margin: 0, fontFamily: 'sans-serif' }}>
        <div style={{ background: 'white', padding: '3rem 2.5rem', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <h1 style={{ color: '#222', marginBottom: '0.5rem' }}>ArConfig</h1>
          <p style={{ color: '#666', marginBottom: '2rem', fontSize: '15px' }}>Oracle Fusion Configuration Management</p>
          <a 
            href="/login.html" 
            style={{ display: 'block', width: '100%', padding: '12px', background: '#007bff', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '16px', fontWeight: '500', boxSizing: 'border-box' }}
          >
            Continue to Login
          </a>
        </div>
      </div>
    );
  }

  // 2. If LOGGED IN, render your full ArConfig Oracle Fusion Dashboard
  return (
    <div className="App">
      <header className="app-header">
        <h2>ArConfig - Oracle Fusion Configuration Management</h2>
        <button 
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            setIsLoggedIn(false);
          }}
          style={{ padding: '6px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </header>
      
      {/* Your standard dashboard view components */}
      <main className="app-content">
        <EnvironmentManager />
        <CompareView />
        <MigrationView />
        <RunHistory />
      </main>
    </div>
  );
}

App.js exports default App;
