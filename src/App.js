import React from 'react';
import Header from './Header.js';
import './App.css';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from './Widgets.js';
export default function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header />
      {/*AppBody*/}
      <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </div>
      {/*Sidebar*/}
      {/*Feed*/}
      {/*Widgets*/}
    </div>
  );
}
