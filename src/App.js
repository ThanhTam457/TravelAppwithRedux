import React from 'react';
import './App.css'
import Home from './Home.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PackagesArchive from './PackagesArchive';
import Header from './include/Header';
import Footer from './include/Footer';
import Booking from './Booking';
import db from './database/DBConfig';
import { useLiveQuery } from "dexie-react-hooks"; 
import {useEffect} from 'react';

function App() {
  db.open().catch((err) => {
    console.log(err.stack || err);
  })

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Home/>}></Route>
          <Route path='ToursPackages' element={<PackagesArchive/>}></Route>
          <Route path='Booking' element={<Booking/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
