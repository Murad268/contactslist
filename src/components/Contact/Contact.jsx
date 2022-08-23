import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import { icons } from '../../utils/utils';
import styles from './contact.module.scss';

const Contact = ({contact}) => {
   const {deleteContact} = useContacts();
   const [show, setShow] = useState(false)
   return (
      
      <>
         <Modal contact={contact} show={show} setShow={setShow}/>
         <div className={styles.contact}>    
            <div className={styles.contact__fullName}>
               <div className={styles.contact__fullName__left}>
                  <span className={styles.contact__name}>{contact.name}</span>
                  <span className={styles.contact__surname}>{contact.surname}</span>
                  <span className={styles.contact__patronymic}>{contact.patronymic}</span>
               </div>
               <div className={styles.contact__fullName__position}>{contact.position}</div>
            </div>
            <div className={styles.contact__controlls}>
               <div onClick={() => setShow(true)} className={styles.contact__controlls__info}><img src={icons.info} alt="" /></div>
               <div onClick={() => deleteContact(contact.id)}  className={styles.contact__controlls__edit}><img src={icons.del} alt="" /></div>
               <Link to={`edit/${contact.id}`} className={styles.contact__controlls__delete}><img src={icons.edit} alt="" /></Link>
            </div>
         </div>
      </>
   );
};

export default Contact;