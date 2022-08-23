import React from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import { icons } from '../../utils/utils';
import styles from './header.module.scss'

const Header = () => {
   const {setTerm, deleteAll} = useContacts();
   return (
      <div className={styles.header}>
         <form className="search-bar">
				<input onChange={e => setTerm(e.target.value)} type="search-name" className={styles.header__search} name="search-area" placeholder="Search"/>
			</form>

			
			<Link to='/contacts/new' className={styles.header__add}><img src={icons.add} alt="" /></Link>
         <div onClick={() => deleteAll()} className={styles.header__delAll}><img src={icons.deleteAll} alt="" /></div>
      </div>
   );
};

export default Header;