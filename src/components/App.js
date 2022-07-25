import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreatContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsAPI";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const [contacts, setContacts] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    ContactsAPI.getAll().then((res) => setContacts(res));
  }, []);

  function removeContact(contact) {
    ContactsAPI.remove(contact)

    setContacts(contacts.filter((c) => c.id !== contact.id));
  }

  function addNewContact(newContact){
    ContactsAPI.create(newContact).then(res => setContacts([...contacts,res]))
    navigate('/')
  }

  return (
    <Routes>
      <Route
        exact path="/"
        element={
          <ListContacts
            contacts={contacts}
            removeContact={removeContact}
          />
        }
      />

      <Route path="/contact" element={<CreatContact onCreateContact={addNewContact}/>} />
    </Routes>
  );
};

export default App;
