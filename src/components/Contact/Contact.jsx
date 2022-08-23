import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import {Modal } from 'antd';
import styles from './contact.module.scss';
import edit from '../../assets/icons/edit-32.ico';
import del from '../../assets/icons/delete-32.ico';
import info from '../../assets/icons/info-32.ico';
import 'antd/dist/antd.css';
const Contact = ({contact}) => {
   const {deleteContact} = useContacts();
   const [visible, setVisible] = useState(false);
   return (
      <div className={styles.contact}>
            <Modal
                  title="Modal 1000px width"
                  centered
                  visible={visible}
                  footer={null}
                  onCancel={() => setVisible(false)}
                  width={1000}
                  >
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
            </Modal>
         <div className={styles.contact__fullName}>
            <div className={styles.contact__fullName__left}>
               <span className={styles.contact__name}>{contact.name}</span>
               <span className={styles.contact__surname}>{contact.surname}</span>
               <span className={styles.contact__patronymic}>{contact.patronymic}</span>
            </div>
            <div className={styles.contact__fullName__position}>{contact.position}</div>
         </div>
         <div className={styles.contact__controlls}>
            <div onClick={() => setVisible(true)} className={styles.contact__controlls__info}><img src={info} alt="" /></div>
            <div onClick={() => deleteContact(contact.id)}  className={styles.contact__controlls__edit}><img src={del} alt="" /></div>
            <Link to={`edit/${contact.id}`} className={styles.contact__controlls__delete}><img src={edit} alt="" /></Link>
         </div>
      </div>
   );
};

export default Contact;