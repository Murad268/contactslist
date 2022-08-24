import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import styles from './newContact.module.scss';
import { tailLayout } from '../../utils/formUtils';
import { useContacts } from '../../contexts/contactsContext';
import uniqid from 'uniqid';
import { antdImports } from '../../utils/formUtils';
import 'antd/dist/antd.min.css';





const NewContact = () => {
   const { Button, Form, Input, Select, Radio, Checkbox, Row, Col, TextArea , Option} = antdImports
   const [form] = Form.useForm();
   const navigate = useNavigate();
   const {addNewContact, position} = useContacts();
   const [values, setValues] = useState({
      id: uniqid(),
      name: "",
      surname: "",
      patronymic: "",
      email: "",
      info: "",
      position: "",
      sex: "male",
      update: false
   })
 
 
   const onSubmit = () => {
      addNewContact({...values}); 
      navigate("../")
   }

   

  
    return (
      <div className={styles.newContact}>
         <h1>Создать новый контакт</h1>
         <Row>
            <Col md={{span: 12, offset: 6}}>
               <Form  layout="horizontal" form={form} name="control-hooks" onFinish={onSubmit}   
               labelCol={{span: 5}}
               >
               <Form.Item
                  name="name"
                  label={<label>Имя</label>}
                  rules={[
                     {
                     required: true,
                     message:"Вы должны ввести имя контака"
                     },
                     {pattern: /^[a-zA-Z]+$/, message: 'Имя может содержать только буквы'}
                     
                  ]}
                  onChange={e => setValues(prev => ({...prev, name : e.target.value}))}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="surname"
                  label={<label>Фамилия</label>}
                  onChange={e => setValues(prev => ({...prev, surname : e.target.value}))}
                  rules={[
                     {
                     required: true,
                     message:"Вы должны ввести фамилию контака"
                     },
                     {pattern: /^[a-zA-Z]+$/, message: 'Фамилия может содержать только буквы'}
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="patronymic"
                  label={<label>Отчество</label>}
                  onChange={e => setValues(prev => ({...prev, patronymic : e.target.value}))}
                  rules={[
                     {
                     required: true,
                     message:"Вы должны ввести отчество контака"
                     },
                     {pattern: /^[a-zA-Z]+$/, message: 'Отчество может содержать только буквы'}
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="email"
                  label={<label>Почта</label>}
                  onChange={e => setValues(prev => ({...prev, email : e.target.value}))}
                  rules={[
                     {
                     required: true,
                     type: "email",
                     message: 'Вы ввели почту в неправильном формате',
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item 
                  label={<label>Пол</label>}
                  onChange={e => setValues(prev => ({...prev, sex : e.target.value}))}
                  name="sex"
                  rules={[
                     {
                     required: true,
                     message: 'Вы должны ввесты пол контакта',
                     },
                  ]}>
                  <Radio.Group>
                     <Radio value="male">мужской</Radio>
                     <Radio value="female">женский</Radio>
                  </Radio.Group>
               </Form.Item>
               <Form.Item
                  name="position"
                  label={<label>Должность</label>}
                  
                  rules={[
                     {
                     required: true,
                     message: 'Вы должны ввесты должность контакта',
                     },
                  ]}
               >
                  <Select
                     onChange={(value) => {
                        setValues(prev => ({...prev , position: value}))
                     }} 
                     placeholder="Выбери должность контакта" 
                     allowClear
                  >
                  {
                     position.map(pos => {
                        return  <Option key={pos.name} value={pos.name}>{pos.name}</Option>
                     })
                  }
                  </Select>
               </Form.Item>
               <Form.Item 
                  label={<label>Доп Инфо</label>}
                  name="info"
                  onChange={e => setValues(prev => ({...prev , info: e.target.value}))}
                  rules={[
                     {
                     required: true,
                     message: 'Вы должны ввесты доп инвормацию о контакте',
                     },
                  ]}>
                  <TextArea rows={4} />
               </Form.Item>
               <Form.Item  {...tailLayout} onChange={e => setValues(prev => ({...prev, update: !prev.update}))} label="" name="update" valuePropName={"checked"}>
                  <Checkbox>Получать уведомление об обновлении</Checkbox>
               </Form.Item>
               
               <Form.Item 
                  {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                     Создать Контакт
                  </Button>
               
               
               </Form.Item>
               </Form>
            </Col>
         </Row>
         
      </div>
    );
};

export default NewContact;