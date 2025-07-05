// App.jsx
import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Country from './components/pages/Country';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="country" element={<Country />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;