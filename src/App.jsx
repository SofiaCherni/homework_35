import { Component, useState } from 'react'
import './App.css'
import NoteList from './components/NoteList';
import NoteItem from './components/NoteItem';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
      const userNote = document.getElementById('userNote').value;
      setNotes([...notes, userNote]); 
  };
  
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  function getList() {
    if(notes.length === 0){
      return <div>Нотаток немає</div>
    } 
    return <NoteList>{notes.map((note, index) => (<NoteItem key={index} note={note} index={index} onDelete={deleteNote}/>))}</NoteList>;
  }
        
  return (
      <div>
          <input 
              type="text" 
              id = "userNote"
              placeholder="Ваш запис" 
          />
          <button onClick={addNote}>Добавить нотатку</button>
          {getList()}
      </div>
  );
}

export default App;