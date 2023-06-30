import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage.jsx';
import CreateScoop from './pages/CreateScoop.jsx';
import MyScoops from './pages/MyScoops.jsx';
import Sidebar from './components/Sidebar.jsx';
import PrivateChat from './pages/PrivateChat';
import { Scoop } from './pages/CreateScoop.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/mainPage" element={<MainPage/>}/>
        <Route path="/createScoop" element={<CreateScoop/>}/>
        <Route path="/myScoops" element={<MyScoops/>}/>
        <Route path= {Scoop} element={<PrivateChat/>}/>
      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
};

export default App;
