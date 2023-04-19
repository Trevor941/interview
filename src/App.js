import logo from './logo.svg';
import './App.css';
import { Employee } from './Employee';
import { Navigation } from './Navigation';

import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Hi React</h1>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Employee/>} exact/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
