import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
function Sidebar() {
  const recentitem =(topic) => (
    <div className="sidebar__recentItems">
      <p>
      <span className="sidebar__hash">#</span>
      {topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt=""
        />
        <Avatar />
        <h2>Dibyendu Bar</h2>
        <h4>dibyendubar13702@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentitem('reactjs')}
        {recentitem('programming')}
        {recentitem('software engineering')}
        {recentitem(' design')}
        {recentitem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
