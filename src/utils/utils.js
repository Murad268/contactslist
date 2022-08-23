import {toast} from 'react-toastify'
import edit from '../assets/icons/edit-32.ico';
import del from '../assets/icons/delete-32.ico';
import info from '../assets/icons/info-32.ico';
import fullName from '../assets/icons/icons8-name-100.png';
import email from '../assets/icons/icons8-mail-48.png';
import pos from '../assets/icons/icons8-new-job-100.png';
import information from '../assets/icons/icons8-info-48.png';
import sex from '../assets/icons/sex.png';
import add from '../assets/icons/icons8-add-64.png';
import exit from '../assets/icons/log-out.png';
import deleteAll from '../assets/icons/icons8-remove-50.png';
import emptyList from '../assets/images/empTyList.jpg';
export const icons = {
   edit,
   del,
   info,
   fullName,
   email,
   pos,
   information,
   sex,
   add,
   exit,
   deleteAll
}
export const images = {
   emptyList
}
export const deleteContactVery = () => toast("Контакт удалён");
export const addContactVery= () => toast("Контакт добавлен");
export const dontChangeContactVery= () => toast("Ошибка! Данные не были изменены");
export const changeContactVery= () => toast("Данные были изменены");
export const deleteAllContactsVery= () => toast("Все контакты удалены");
export const dontDeleteAll= () => toast("В списке нет контактов");
export const searchEmp = (items, term) => {
   if (term.length === 0) {
       return items;
   }
   return items.filter(item => {
       return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 || 
              item.position.toLowerCase().indexOf(term.toLowerCase()) > -1 || 
              item.surname.toLowerCase().indexOf(term.toLowerCase()) > -1 || 
              item.patronymic.toLowerCase().indexOf(term.toLowerCase()) > -1
   })
}



