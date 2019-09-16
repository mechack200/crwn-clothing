import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Homepage from './pages/homepage/homepage/Homepage.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Homepage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
