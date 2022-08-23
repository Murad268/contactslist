import React from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import { images } from '../../utils/utils';
import Contact from '../Contact/Contact';
import styles from './contacts.module.scss';
const Contacts = () => {
   const {contactsList} = useContacts();
   return (
      <div className={styles.contacts}>
         <ul className="">
            {!!contactsList.length?contactsList.map(contact => {
               return <Contact key={contact.id} contact={contact}/>
            }):
            <div className={styles.contacts__empty}>
               <Link to="/contacts/new" className='d-flex justify-content-center align-items-center'>
                  <img src={images.emptyList} alt="" />
               </Link>
               <div className={styles.contacts__empty__title}>В данный момент список контактов пуст</div>
            </div>}
         </ul>
      </div>
   );
};

export default Contacts;