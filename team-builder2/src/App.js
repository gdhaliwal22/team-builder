import React, { useState }  from 'react';

import './App.css';
import Form from './components/Form';
import TeamMember from './components/TeamMember';

function App() {
 const [member, setMember] = useState([]);

 const addNewMember = info => {
  const newMember = {
    id: Date.now(),
    name: info.name,
    email: info.email,
    role: info.role
  };
  setMember([...member, newMember]);
 }

  return (
    <div className="App">
        <header>Team List</header>
        
          <Form addNewMember={addNewMember} />
          <TeamMember memberList={member} />

    </div>
  );
}

export default App;