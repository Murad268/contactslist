import React, {createContext, useContext, useState} from 'react';
import {toast} from 'react-toastify'
const ContactsContext = createContext()


export const ContactsContextProvider = ({children}) => {
   const deleteContactVery = () => toast("Контакт удалён");
   const addContactVery= () => toast("Контакт добавлен");
   const [contactsList, setContactsList] = useState(localStorage.getItem('contactsList')? JSON.parse(localStorage.getItem('contactsList')) : []);
   const setContactsWithSave = (newContacts) => {
      setContactsList(newContacts);
      localStorage.setItem('contactsList', JSON.stringify(newContacts))
  };
  const [position] = useState([
   {id:1, name: "Frontend developer" },
   {id:2, name: "Backend developer" },
   {id:3, name: "Manager" },
   {id:4, name: "DevOps" }
])
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
   
   const values = {
      contactsList,
      addNewContact,
      deleteContact,
      position
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