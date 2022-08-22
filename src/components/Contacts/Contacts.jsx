import React from 'react';
import Contact from '../Contact/Contact';
import styles from './Contacts';
const Contacts = () => {
   return (
      <div className={styles.contacts}>
         <ul className="">
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
         </ul>
      </div>
   );
};

export default Contacts;