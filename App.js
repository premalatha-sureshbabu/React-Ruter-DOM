# App.js
```
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

// Styles for active nav link
const activeStyle = {
  fontWeight: 'bold',
  color: '#0077cc',
  borderBottom: '2px solid #0077cc',
};

// Layout component wraps the navigation and page content
const Layout = ({ children }) => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <nav
        style={{
          display: 'flex',
          gap: 20,
          marginBottom: 40,
          borderBottom: '1px solid #ddd',
          paddingBottom: 10,
        }}
        aria-label="Main navigation"
      >
        <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          About
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Contact
        </NavLink>
      </nav>

      <main>{children}</main>

      <footer style={{ marginTop: 60, borderTop: '1px solid #ddd', paddingTop: 20, fontSize: 14, color: '#666' }}>
        © {new Date().getFullYear()} React-Router Company
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```
