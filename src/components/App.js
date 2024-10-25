import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  const [contacts,setContacts]=useState([]);
const LOCAL_STORAGE_KEY="contacts";
  const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,contact]);
  }

  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
    if(retrieveContacts) 
    setContacts(retrieveContacts)
    },[])

useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
console.log("kiara", JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
},[contacts])



  return (
  <div className="ui container">
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<ContactList contacts={contacts}/>}  />
    <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}  />
   
    </Routes>
    {/* <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/> */}
    </Router>
  </div>
  );
}

export default App;
