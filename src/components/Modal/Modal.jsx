import React from 'react';
import {icons} from '../../utils/utils';
import styles from './modal.module.scss'
const Modal = ({contact, show, setShow}) => {
   
   const modalClass = show?styles.modal+" " + styles.modal__active:styles.modal
   return (
      <div className={modalClass}>
         
         <div className={styles.modal__box}>
         <div onClick={() => setShow(false)} className={styles.modal__close}><img src={icons.exit} alt="" /></div>
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

      </div>
   );
};

export default Modal;