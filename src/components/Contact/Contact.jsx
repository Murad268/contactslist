import React, {useState} from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import { icons } from '../../utils/utils';
import styles from './contact.module.scss';

const Contact = ({contact}) => {
   const {deleteContact} = useContacts();
   const [isModalVisible, setIsModalVisible] = useState(false);

   const showModal = () => {
     setIsModalVisible(true);
   };
 
 
   const handleCancel = () => {
      setIsModalVisible(false);
   }
   return (
      
      <>
         <Modal width={550} footer={null} visible={isModalVisible}  onCancel={handleCancel}>
            <div className={styles.modal__wrapper}>
               <h3 className={styles.modal__title}>{`Информация об ${contact.name} ${contact.surname}`}</h3>
                  <div className={styles.modal__box__body}>
                     <div className={styles.modal__element}>
                        <img src={icons.fullName} alt="" />
                        <div><span>ФИО: </span>{contact.name} {contact.surname} {contact.patronymic}</div>
                     </div>
                     <div className={styles.modal__element}>
                        <img src={icons.email} alt="" />
                        <div><span>Почта: </span>{contact.email}</div>
                     </div>
                     <div className={styles.modal__element}>
                        <img src={icons.pos} alt="" />
                        <div><span>Должность: </span>{contact.position}</div>
                     </div>
                     <div className={styles.modal__element}>
                        <img src={icons.information} alt="" />
                        <div><span>Дополнительная информация: </span> <br /> <div className={styles.modal__element__infoCONtact}>{contact.info}</div></div>
                     </div>
                     <div className={styles.modal__element}>
                        <img src={icons.sex} alt="" />
                        <div><span>Пол: </span>{contact.sex==='male'?"Мужчина":"Женщина"}</div>
                     </div>
                  </div>
            </div>
         </Modal>
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
               <div onClick={showModal} className={styles.contact__controlls__info}><img src={icons.info} alt="" /></div>
               <div onClick={() => deleteContact(contact.id)}  className={styles.contact__controlls__edit}><img src={icons.del} alt="" /></div>
               <Link to={`edit/${contact.id}`} className={styles.contact__controlls__delete}><img src={icons.edit} alt="" /></Link>
            </div>
         </div>
      </>
   );
};

export default Contact;