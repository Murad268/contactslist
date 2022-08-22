import React, {createContext, useContext} from 'react';
import {toast} from 'react-toastify'
const ContactsContext = createContext()

export const ContactsContextProvider = ({children}) => {
  



  


   const values = {
      
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