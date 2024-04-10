import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Welcome from './Welcome';
import CreateModule from './CreateModule';
import Output from './Output';

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/create_module" element={<CreateModule />}/>
        <Route path="/output" element={<Output />}/>
      </Routes>
    </Router>
  );
}

export default Home;
