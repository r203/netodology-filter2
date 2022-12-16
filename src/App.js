import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="App">
      <ServiceAdd 
        editMode={editMode}
        setEditMode={setEditMode}
        />
      <ServiceList setEditMode={setEditMode}/>
      <Filter />
    </div>
  );
}

export default App;
