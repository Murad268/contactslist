import React from 'react';
import styles from './contact.module.scss';
import edit from '../../assets/icons/edit-32.ico';
import deleteContact from '../../assets/icons/delete-32.ico';
import info from '../../assets/icons/info-32.ico';
const Contact = () => {
   return (
      <div className={styles.contact}>
         <div className={styles.contact__fullName}>
            <div className={styles.contact__fullName__left}>
               <span className={styles.contact__name}>Murad</span>
               <span className={styles.contact__surname}>Agamedov</span>
               <span className={styles.contact__patronymic}>Elfeddin</span>
            </div>
            <div className={styles.contact__fullName__position}>Full stack developer</div>
         </div>
         <div className={styles.contact__controlls}>
            <div className={styles.contact__controlls__info}><img src={info} alt="" /></div>
            <div className={styles.contact__controlls__edit}><img src={deleteContact} alt="" /></div>
            <div className={styles.contact__controlls__delete}><img src={edit} alt="" /></div>
         </div>
      </div>
   );
};

export default Contact;