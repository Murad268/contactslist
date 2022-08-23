import React, {useState} from 'react';
import { useContacts } from '../../contexts/contactsContext';
import { useParams } from 'react-router-dom';
import styles from './editor.modules.scss';
const Editor = () => {
   const {contactsList, position} = useContacts();
   const {id} = useParams();
   const [editingList, setEditingList] = useState(contactsList.find(item => item.id === id))
   console.log(editingList)
   return (
      <>
   <form>
      <div className="mb-3">
         <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
         <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
         <label htmlFor="exampleInputName" className="form-label">Name</label>
         <input type="text" className="form-control" id="exampleInputName"/>
      </div>
      <div className="mb-3">
         <label htmlFor="exampleInputSurname" className="form-label">Surname</label>
         <input type="text" className="form-control" id="exampleInputSurname"/>
      </div>
      <div className="mb-3">
         <label htmlFor="exampleInputPatronymic" className="form-label">Name</label>
         <input type="text" className="form-control" id="exampleInputpatronymic"/>
      </div>
      <div className="mb-3 form-check">
         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
         <label className="form-check-label" htmlFor="exampleCheck1">Updates</label>
      </div>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
         <option>Open this select menu</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
      </select>
      <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
         Default radio
      </label>
      </div>
      <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
      <label className="form-check-label" htmlFor="flexRadioDefault2">
         Default checked radio
      </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
   </form>
      </>
   )
};

export default Editor;