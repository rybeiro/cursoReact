import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import classNames from 'classnames';
import uuid from 'react-uuid';

class App extends React.Component{
  state = {
    notes: []
  }

  handleAddNote = text => {
    this.setState(prevState => ({
      notes: prevState.notes.concat({id: uuid(), text})
    }));
  };

  handleMove = (direction, index) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const removeNotes = newNotes.splice(index, 1)[0];

      if(direction === "up"){
        newNotes.splice(index - 1, 0, removeNotes);
      } else {
        newNotes.splice(index + 1, 0, removeNotes);
      }
      return {
        notes: newNotes
      }
    });
  }

  render(){
    return(
      <div className="container">
        <NewNote onAddNote={this.handleAddNote} />
        <NoteList notes={this.state.notes} onMove={this.handleMove} />
      </div>
    )
  }
}


class NewNote extends React.Component{
  state = {
    text: ''
  }

  render(){
    const {onAddNote} = this.props;
    const {text} = this.state;

    return(
      <div className="new-note">
        <input type='text' className="new-note__input"
        placeholder="Digite sua nota"
        value={text}
        onChange={event => this.setState({
          text: event.target.value
        })}
          onKeyPress={event => {
            if(event.key === "Enter"){
              onAddNote(event.target.value);
              this.setState({
                text: ''
              })
            }
          }}
        />
      </div>
    )
  }
}

const NoteList = ({ notes, onMove }) => (
  <div className="note-list">
    {notes.map((note, index) => (
      <div key={note.id} className="note">
        <span className="note__text">{note.text}</span>
        <button className={classNames("note__button", {
          "note__button--hidden": index === 0
        })} onClick={() => {onMove("up", index);}}>
          <span class="material-icons">
            keyboard_arrow_up
          </span>
        </button>
      <button className={classNames("note__button", {
        "note__button--hidden": index === notes.length - 1
      })} onClick={() => {onMove("down", index);}}>
          <span class="material-icons">
            keyboard_arrow_down
          </span>
        </button>
      </div>
    ))}
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
