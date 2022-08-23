import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import styles from './newContact.module.scss';
import { useContacts } from '../../contexts/contactsContext';
import uniqid from 'uniqid';
const NewContact = () => {
   const navigate = useNavigate();
   const {addNewContact, position} = useContacts();
   const [values, setValues] = useState({
      name: "",
      surname: "",
      patronymic: "",
      email: "",
      info: "",
      position: "Frontend developer",
      sex: "male",
      update: false
   })
 


   const vanileFunction = () => {
      document.querySelectorAll("input").forEach((input, i) => {
         input.addEventListener("input", () => {
            if(values.name !=="") {
               document.querySelectorAll("label")[0].style.display="none"
            } else {
               document.querySelectorAll("label")[0].style.display="block"
            }
            if(values.surname !=="") {
               document.querySelectorAll("label")[1].style.display="none"
            } else {
               document.querySelectorAll("label")[1].style.display="block"
            }
            if(values.patronymic !=="") {
               document.querySelectorAll("label")[2].style.display="none"
            } else {
               document.querySelectorAll("label")[2].style.display="block"
            }
            if(values.email !=="") {
               document.querySelectorAll("label")[3].style.display="none"
            } else {
               document.querySelectorAll("label")[3].style.display="block"
            }
         })
      })
   }

   vanileFunction()


   const setValue = (e) => {
      setValues(prev => ({...prev, [e.target.name] : e.target.value}))
   }
   const onSubmit = (e) => {
      e.preventDefault()
      addNewContact({...values, id:uniqid()});
      navigate("../")
   }
   return (
      <div className={styles.newContacts}>
         <div className={styles.newContacts__login__box}>
         
         <h2 className={styles.newContacts__title}>Добавление контакта</h2>
         <form onSubmit={onSubmit}>
            <div className={styles.newContacts__user__box}>
               <input onChange={setValue} type="text" value={values.name} name="name" required/>
               <label>Имя</label>
            </div>
            <div className={styles.newContacts__user__box}>
               <input onChange={setValue} type="text"  value={values.surname} name="surname" required/>
               <label>Фамилия</label>
            </div>
            <div className={styles.newContacts__user__box}>
               <input onChange={setValue} type="text"  value={values.patronymic} name="patronymic" required/>
               <label>Отчество</label>
            </div>
            <div className={styles.newContacts__user__box}>
               <input onChange={setValue} type="email"  value={values.email} name="email" required/>
               <label>Почта</label>
            </div>
            <h4>Пол</h4>
            <div className={styles.newContacts__user__radiobox}>
              
               <div className="input__group">
                  <input defaultChecked onChange={e => setValues(prev => ({...prev, sex: "male"}))} type="radio" id='male' name="sex"  value={values.email} required/> 
                  <label htmlFor="male">мужской</label>
               </div>
               <div className="input__group">
                  <input onChange={e => setValues(prev => ({...prev, sex: "female"}))} type="radio" id='female' name="sex" value={values.email}  required/> 
                  <label htmlFor="female">женский</label>
               </div>
            </div>
            <h4 style={{"marginTop": "15px"}}>Должность</h4>
            <select onChange={setValue} name="position" id="">
               {
                  position.map(pos => {
                     return <option key={pos.id} value={pos.name}>{pos.name}</option>
                  })
               }
            </select>
            <div className="hr"></div>
            <div className={styles.newContacts__user__radiobox}>
              
              <div className="input__group">
                 <input  onChange={e => setValues(prev => ({...prev, update: !prev.update}))} type="checkbox" id='male'  value={values.email} name="update" /> 
                 <label htmlFor="update">сообщать об обновелии</label>
              </div>
           </div>
            <br />
            <div className={styles.newContacts__about}>
               <h1 className={styles.title}>Добвить новый контакт</h1>
               <h4 className={styles.newContacts__about__title}>Дополнительная информация</h4>
               <textarea onChange={setValue} name="info" id="" cols="30" rows="10" required></textarea>
            </div>
            <button></button>
            <a type='submit' className='btn'  href="#">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               Добваить контакт
            </a>
         </form>
         </div>
      </div>
   );
};

export default NewContact;