# Notfound.js
```
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section style={{ textAlign: 'center', padding: 40 }}>
    <h1 style={{ fontSize: 72, marginBottom: 20, color: '#cc0000' }}>404</h1>
    <h2>Oops! Page not found.</h2>
    <p>The page you’re looking for does not exist or has been moved.</p>
    <Link to="/" style={{ color: '#0077cc', textDecoration: 'underline', marginTop: 20, display: 'inline-block' }}>
      Back to Home
    </Link>
  </section>
);

export default NotFound;

```
