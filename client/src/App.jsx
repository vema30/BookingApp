import React from 'react';
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route 
        path="/" element={<IndexPage />} />
         <Route
          path='/login' element={<LoginPage/>}>
         </Route>
         <Route
          path='/register' element={<RegisterPage/>}>
         </Route>
      </Routes>
      
    </div>
  );
};

export default App;
