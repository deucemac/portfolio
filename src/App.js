import React from 'react';
import './App.css';
import Applist from '../src/components/Applist'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route component={Applist} />
    </div>
  );
}

export default App;
