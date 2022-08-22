import React from 'react';
import { useContacts } from '../../contexts/contactsContext';
import styles from './contact.module.scss';
import edit from '../../assets/icons/edit-32.ico';
import del from '../../assets/icons/delete-32.ico';
import info from '../../assets/icons/info-32.ico';
const Contact = ({contact}) => {
   const {deleteContact} = useContacts();
   return (
      <div className={styles.contact}>
         <div className={styles.contact__fullName}>
            <div className={styles.contact__fullName__left}>
               <span className={styles.contact__name}>{contact.name}</span>
               <span className={styles.contact__surname}>{contact.surname}</span>
               <span className={styles.contact__patronymic}>{contact.surname}</span>
            </div>
            <div className={styles.contact__fullName__position}>{contact.position}</div>
         </div>
         <div className={styles.contact__controlls}>
            <div className={styles.contact__controlls__info}><img src={info} alt="" /></div>
            <div onClick={() => deleteContact(contact.id)}  className={styles.contact__controlls__edit}><img src={del} alt="" /></div>
            <div className={styles.contact__controlls__delete}><img src={edit} alt="" /></div>
         </div>
      </div>
   );
};

export default Contact;