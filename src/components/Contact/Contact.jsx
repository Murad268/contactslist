import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import {Modal } from 'antd';
import styles from './contact.module.scss';
import edit from '../../assets/icons/edit-32.ico';
import del from '../../assets/icons/delete-32.ico';
import info from '../../assets/icons/info-32.ico';
import fullName from '../../assets/icons/icons8-name-100.png';
import email from '../../assets/icons/icons8-mail-48.png';
import pos from '../../assets/icons/icons8-new-job-100.png';
import information from '../../assets/icons/icons8-info-48.png';
import sex from '../../assets/icons/sex.png';
import 'antd/dist/antd.css';
const Contact = ({contact}) => {
   const {deleteContact} = useContacts();
   const [visible, setVisible] = useState(false);
   return (
      <div className={styles.contact}>
            <Modal
                  title={`Информация о ${contact.name} ${contact.surname}`} 
                  centered
                  visible={visible}
                  footer={null}
                  onCancel={() => setVisible(false)}
                  width={1000}
                  >
                  <p className={styles.contact__par}><img src={fullName} alt="fullName" /> <span>ФИО</span> {contact.name} {contact.surname} {contact.patronymic}</p>
                  <p className={styles.contact__par}><img src={email} alt="email" /> <span>Почта:</span> {contact.email}</p>
                  <p className={styles.contact__par}><img src={pos} alt="position" /> <span>Должность:</span> {contact.position}</p>
                  <p className={styles.contact__par}><img src={information} alt="info"/> <span>Дополнительная информация:</span> <br /> <div className={styles.contact__box}>{contact.info}</div></p>
                  <p className={styles.contact__par}><img src={sex} alt="sex" /> <span>Пол:</span> {contact.sex==="male"?"Мужчина":"женщина"}</p>
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