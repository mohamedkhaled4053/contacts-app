import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from '../utils/ContactsAPI'

const App = () => {
  const [contacts, setContacts] = useState([])


  useEffect(()=>{
    // async function getContacts(){
    //   let res = await ContactsAPI.getAll()
    //   setContacts(res)
    // }

    // getContacts()
    
    ContactsAPI.getAll().then(res => setContacts(res))
  },[])

  function removeContact(contact) {
      ContactsAPI.remove(contact)

      setContacts(contacts.filter(c => c.id !== contact.id))
  }

  return (
    <div>
      <ListContacts contacts={contacts} removeContact ={removeContact}/>
    </div>
  )
};

export default App;
