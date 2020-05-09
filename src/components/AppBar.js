import React from 'react';

const AppBar = ({isLoading}) => (
  <div className="app-bar">
    <div className="app-bar__container">
      <span className="app-bar__brand ">Note.js</span>
      {isLoading && (
        <button className="app-bar__actions app-bar__actions--rotation">
          <i className="material-icons">refresh</i>
        </button>
      )}
    </div>
  </div>
)

export default AppBar;
