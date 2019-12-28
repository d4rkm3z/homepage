import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from 'pages/Index';

const App = () => (
  <Router>
    <Index />
  </Router>
);

export default hot(App);
