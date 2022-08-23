import React from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../../contexts/contactsContext';
import { icons } from '../../utils/utils';
import styles from './header.module.scss'

const Header = () => {
   const {setTerm} = useContacts();
   return (
      <div className={styles.header}>
         <form className="search-bar">
				<input onChange={e => setTerm(e.target.value)} type="search-name" className={styles.header__search} name="search-area" placeholder="Search"/>
			</form>

			
			<Link to='/contacts/new' className={styles.header__add}><img src={icons.add} alt="" /></Link>
      </div>
   );
};

export default Header;