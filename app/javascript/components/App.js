import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Greeting from './Greeting';

function App() {
  return (
    <div>       
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
      <Link to="/greeting">Greeting</Link>
    </div>
  );
}

export default App;
