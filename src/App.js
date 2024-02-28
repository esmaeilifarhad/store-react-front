import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Router } from 'react-router-dom';
import MasterPage from './MasterPage/MasterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MasterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
