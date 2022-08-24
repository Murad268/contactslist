import React from 'react';
import {Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import { icons } from '../../utils/utils';
import styles from './header.module.scss'

const Header = () => {
   const text = 'Вы уверены, что хотите удалить все контакты?';

   const confirm = () => {
      deleteAll()
   };
   const {setTerm, deleteAll} = useContacts();
   return (
      <div className={styles.header}>
         <form className="search-bar">
				<input onChange={e => setTerm(e.target.value)} type="search-name" className={styles.header__search} name="search-area" placeholder="Search"/>
			</form>
			<Link to='/contacts/new' className={styles.header__add}><img src={icons.add} alt="" /></Link>
         <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <div className={styles.header__delAll}><img src={icons.deleteAll} alt="" /></div>
         </Popconfirm>
      </div>
   );
};

export default Header;

