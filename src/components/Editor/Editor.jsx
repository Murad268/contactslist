import React, {useState} from 'react';
import { useContacts } from '../../contexts/contactsContext';
import { useParams } from 'react-router-dom';
import styles from './editor.module.scss';
const Editor = () => {
   const {contactsList, position} = useContacts();
   const {id} = useParams();
   const [editingList, setEditingList] = useState(contactsList.find(item => item.id === id))
   
   const onHandlerChange = (e) => {
       setEditingList(prev => ({...prev, [e.target.name] : e.target.value}))
   }
   return (
      <div className={styles.updateForm}>
         <h1 className={styles.updateForm__title}>Изменить этот контакт</h1>
         <form>
            <div className="mb-3">
               <label htmlFor="exampleInputName" className="form-label">Имя</label>
               <input onChange={onHandlerChange} name="name" value={editingList.name} type="text" className="form-control" id="exampleInputName"/>
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputSurname" className="form-label">Фамилия</label>
               <input onChange={onHandlerChange} name="surname" value={editingList.surname} type="text" className="form-control" id="exampleInputSurname"/>
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPatronymic" className="form-label">Отчество</label>
               <input onChange={onHandlerChange} name="patronymic" value={editingList.patronymic} type="text" className="form-control" id="exampleInputPatronymic"/>
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputEmail" className="form-label">Почта</label>
               <input onChange={onHandlerChange} name="email" value={editingList.email} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
            </div>
            <div className={styles.updateForm__gender}>Пол</div>
            <div className="form-check">
               <input onChange={e => setEditingList(prev => ({...prev, sex: "female"}))} name="sex" defaultChecked={editingList.sex === "male"} className="form-check-input" type="radio" id="flexRadioDefault1"/>
               <label className="form-check-label" htmlFor="flexRadioDefault1">
                  мужской
               </label>
            </div>
            <div className="form-check">
               <input onChange={e => setEditingList(prev => ({...prev, sex: "female"}))} name="sex" defaultChecked={editingList.sex === "female"} className="form-check-input" type="radio" id="flexRadioDefault2" />
               <label className="form-check-label" htmlFor="flexRadioDefault2">
                  женский
               </label>
            </div>
            <label style={{"marginTop": "10px", "marginBottom": "10px"}} htmlFor="posselect" className="form-label">Должность</label>
            <select defaultValue={editingList.position} name="postion" onChange={onHandlerChange} id='posselect' className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
               {position.map(pos => {
                  return  <option key={pos.id} value={pos.name}>{pos.name}</option>
               })}
            </select>
            <div className="mb-3">
               <label htmlFor="exampleInputInfo" className="form-label">Дополнительная иныормация</label>
               <textarea onChange={onHandlerChange} name="info" value={editingList.info} type="text" className="form-control" id="exampleInputInfo"/>
            </div>
            <div className="mb-3 form-check">
               <input onChange={e => setEditingList(prev => ({...prev, update: !prev.update}))} defaultChecked={editingList.update}  type="checkbox" className="form-check-input" id="exampleCheck1"/>
               <label className="form-check-label" htmlFor="exampleCheck1">сообщать об обновелии</label>
            </div>
        
         
            <button type="submit" className="btn btn-primary">Изменить контакт</button>
         </form>
      </div>
   )
};

export default Editor;