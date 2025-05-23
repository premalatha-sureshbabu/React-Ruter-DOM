
# Home.js
```

import React from 'react';
import natureImg from './image.png';

const Home = () => (
  <section>
    <h1>Welcome to React-Router!</h1>
    <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#333' }}>
      This is the home page of our awesome React Router example. Use the navigation links above to explore different pages.
    </p>
    <img
  src={natureImg}
  alt="Nature"
  style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 8, marginTop: 20 }}
/>

  </section>
);

export default Home;
```
