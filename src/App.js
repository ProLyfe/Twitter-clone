import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets'; 
import db from './Firebase';

function App() {
  return (
    //BEM 
    <div className="app">
      {console.log(db)}
      <Sidebar />
      <Feed />
      <Widgets /> 
    </div>
  );
}

export default App;
