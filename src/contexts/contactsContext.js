import React, {createContext, useContext, useState} from 'react';
import { deleteContactVery, addContactVery, dontChangeContactVery, changeContactVery, deleteAllContactsVery, dontDeleteAll } from '../utils/utils';
import { searchEmp } from '../utils/utils';
import {useNavigate } from 'react-router-dom';
const ContactsContext = createContext()


export const ContactsContextProvider = ({children}) => {
   const navigate = useNavigate();

   const [contactsList, setContactsList] = useState(localStorage.getItem('contactsList')? JSON.parse(localStorage.getItem('contactsList')) : []);
   const setContactsWithSave = (newContacts) => {
      setContactsList(newContacts);
      localStorage.setItem('contactsList', JSON.stringify(newContacts))
  };
  const [position] = useState([
   {id:1, name: "Frontend developer" },
   {id:2, name: "Backend developer" },
   {id:3, name: "QA Manager" },
   {id:4, name: "DevOps" }
])
const [term, setTerm] = useState("")
  const addNewContact = (data) => {
   const newContacts = [...contactsList, data];
   setContactsWithSave(newContacts);
   addContactVery()
} 

const deleteContact = (id) => {
   const newContacts = contactsList.filter(item => item.id !== id);
   setContactsWithSave(newContacts);
   deleteContactVery()
}

const setContact = (id, data) => {
   let newContacts = contactsList.map(contact => {
      if(contact.id === id) {
         contact=data
      }
      return contact
   })
   if(JSON.stringify(contactsList) === JSON.stringify(newContacts)) {
      dontChangeContactVery();
      setTerm("");
   } else {
      navigate('../');
      changeContactVery();
      setContactsWithSave(newContacts);
      setTerm("");
   }
   
  
}
const deleteAll = () => {
   if(contactsList.length) {
      setContactsWithSave([]);
      deleteAllContactsVery();
   } else {
      dontDeleteAll();
   };
   
}


   const values = {
      contactsList:searchEmp(contactsList,term),
      addNewContact,
      deleteContact,
      position,
      setContact,
      setTerm,
      searchEmp,
      term,
      deleteAll
   }
   return <ContactsContext.Provider value={values}>{children}</ContactsContext.Provider>
}


export const useContacts = () => {
   const context = useContext(ContactsContext)

   if(context===undefined) {
      throw new Error("useContacts hook must be call inside ContactsProvider")
   }
   return context
}