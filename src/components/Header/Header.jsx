import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss'
import add from '../../assets/icons/icons8-add-64.png';
const Header = () => {
   
   return (
      <div className={styles.header}>
         <form className="search-bar">
				<input type="search-name" className={styles.header__search} name="search-area" placeholder="Search"/>
			</form>

			
			<Link to='/contacts/new' className={styles.header__add}><img src={add} alt="" /></Link>
      </div>
   );
};

export default Header;