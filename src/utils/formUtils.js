import { Button, Form, Input, Select, Radio, Checkbox, Row, Col } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

export const antdImports = {
   Button,
   Form,
   Input,
   Select,
   Radio,
   Checkbox,
   Row,
   Col,
   TextArea, 
   Option
}

export const fields = (state) => {
   return [
      
         {
           name: ["name"],
           value: state.name
         },
         {
            name: ["surname"],
            value: state.surname
         },
         {
            name: ["patronymic"],
            value: state.patronymic
         },
         {
            name: ["email"],
            value: state.email
         },
         {
            name: ["position"],
            value: state.position
         },
         {
            name: ["sex"],
            value: state.sex
         },
         {
            name: ["update"],
            value: state.update
         },
         {
            name: ["info"],
            value: state.info
         },
       
   ]
}


export const tailLayout = {
   wrapperCol: {
     offset: 5,
     span: 16,
   },
 };

 export const rules = {
   "name": [
      {
      required: true,
      message:"Вы должны ввести имя контакта"
      },
      {pattern:  /^[a-zA-ZƏəğİiÜüŞşçÇ]+$/, message: 'Имя может содержать только буквы'},
      {min: 3,  message: 'имя должно быть не менее 3 символов'}  
   ],
   "surname": [
      {
      required: true,
      message:"Вы должны ввести фамилию контакта"
      },
      {pattern:  /^[a-zA-ZƏəğİiÜüŞşçÇ]+$/, message: 'Фамилия может содержать только буквы'},
      {min: 3,  message: 'Фамилия должно быть не менее 3 символов'}
   ],
   "patronymic": [
      {
      required: true,
      message:"Вы должны ввести отчество контакта"
      },
      {pattern:  /^[a-zA-ZƏəğİiÜüŞşçÇ]+$/, message: 'Отчество может содержать только буквы'},
      {min: 3,  message: 'Отчество должно быть не менее 3 символов'}
   ],
   "email": [
      {
      required: true,
      type: "email",
      message: 'Вы ввели почту в неправильном формате',
      },
   ],
   "sex": [
      {
      required: true,
      message: 'Вы должны ввесты пол контакта',
      },
   ],
   "info": [
      {
      required: true,
      message: 'Вы должны ввесты доп инвормацию о контакте',
      },
      {min: 10,  message: 'доп инвормация должна состоять не менее 10 символов'}
   ]
 }

