import React from 'react';
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import App from './Home';
import View from './View';
import Test from './Builder/Blocks/Preview';


const RoutingConfig = () => (
  <Router>
        <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/licht" element={<Test />}></Route>

      </Routes>

  </Router>
);

export default RoutingConfig;