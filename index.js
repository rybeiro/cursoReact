import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

const App = () => (
  <div className="container">
    <NewNote />
    <ListNote />
  </div>
)

const NewNote = () => (
  <div className="new-note">
    <input type='text' className="new-note__input" />
  </div>
)

const ListNote = () => (
  <div className="note-list">
    <div className="note">Teste</div>
    <div className="note">Teste</div>
    <div className="note">Teste</div>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
);