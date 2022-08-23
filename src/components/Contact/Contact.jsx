import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import {Modal } from 'antd';
import { icons } from '../../utils/utils';
import styles from './contact.module.scss';

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
                  <p className={styles.contact__par}><img src={icons.fullName} alt="fullName" /> <span>ФИО</span> {contact.name} {contact.surname} {contact.patronymic}</p>
                  <p className={styles.contact__par}><img src={icons.email} alt="email" /> <span>Почта:</span> {contact.email}</p>
                  <p className={styles.contact__par}><img src={icons.pos} alt="position" /> <span>Должность:</span> {contact.position}</p>
                  <p className={styles.contact__par}><img src={icons.information} alt="info"/> <span>Дополнительная информация:</span> <br /> <div className={styles.contact__box}>{contact.info}</div></p>
                  <p className={styles.contact__par}><img src={icons.sex} alt="sex" /> <span>Пол:</span> {contact.sex==="male"?"Мужчина":"женщина"}</p>
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
            <div onClick={() => setVisible(true)} className={styles.contact__controlls__info}><img src={icons.info} alt="" /></div>
            <div onClick={() => deleteContact(contact.id)}  className={styles.contact__controlls__edit}><img src={icons.del} alt="" /></div>
            <Link to={`edit/${contact.id}`} className={styles.contact__controlls__delete}><img src={icons.edit} alt="" /></Link>
         </div>
      </div>
   );
};

export default Contact;