
import React from 'react';
import Form from './components/form/form';
import Users from './components/users/users';
import NavBar from './components/nav/navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  
  return (

    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>

    </BrowserRouter>






  );

}

export default App;
