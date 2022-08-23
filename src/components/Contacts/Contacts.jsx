import React from 'react';
import { useContacts } from '../../contexts/contactsContext';
import Contact from '../Contact/Contact';
import styles from './Contacts';
const Contacts = () => {
   const {contactsList} = useContacts();
   console.log(contactsList);
   return (
      <div className={styles.contacts}>

   

         <ul className="">
            {contactsList.map(contact => {
               return <Contact key={contact.id} contact={contact}/>
            })}
         </ul>
      </div>
   );
};

export default Contacts;