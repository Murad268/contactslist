import React, {useState} from 'react';
import styles from './editor.module.scss';
import { fields, tailLayout } from '../../utils/formUtils';import { useContacts } from '../../contexts/contactsContext';
import { useParams } from 'react-router-dom';
import { antdImports } from '../../utils/formUtils';


const Editor = () => {
   const { Button, Form, Input, Select, Radio, Checkbox, Row, Col, TextArea , Option} = antdImports
   const [form] = Form.useForm();
   const {contactsList, position, setContact} = useContacts();
   const {id} = useParams();
   const [editingList, setEditingList] = useState(contactsList.find(item => item.id === id))
  
   const onSubmit = (e) => {
      setContact(id, editingList);
   }
 
   return (
      <div className={styles.edit}>
         <h1>Изменит контакт</h1>
         <Row>
            <Col md={{span: 12, offset: 6}}>
               <Form  layout="horizontal" form={form} name="control-hooks" onFinish={onSubmit}   
               labelCol={{span: 5}}
               fields={fields(editingList)}
               >
               <Form.Item
                  name="name"
                  label={<label>Имя</label>}
                  rules={[
                     {
                     required: true,
                     message:"Вы должны ввести имя контакта"
                     },
                     {pattern: /^[a-zA-Z]+$/, message: 'Имя может содержать только буквы'},
                     {min: 3,  message: 'имя должно быть не менее 3 символов'}
                  ]}
                  onChange={e => setEditingList(prev => ({...prev, name : e.target.value}))}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="surname"
                  label={<label>Фамилия</label>}
                  onChange={e => setEditingList(prev => ({...prev, surname : e.target.value}))}
                  rules={[
                     {
                     required: true,
                     message:"Вы должны ввести фамилию контакта"
                     },
                     {pattern: /^[a-zA-Z]+$/, message: 'Фамилия может содержать только буквы'},
                     {min: 3,  message: 'Фамилия должно быть не менее 3 символов'}
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="patronymic"
                  label={<label>Отчество</label>}
                  onChange={e => setEditingList(prev => ({...prev, patronymic : e.target.value}))}
                  rules={[
                     {
                     required: true,
                     message:"Вы должны ввести отчество контакта"
                     },
                     {pattern: /^[a-zA-Z]+$/, message: 'Отчество может содержать только буквы'},
                     {min: 3,  message: 'Отчество должно быть не менее 3 символов'}
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="email"
                  label={<label>Почта</label>}
                  onChange={e => setEditingList(prev => ({...prev, email : e.target.value}))}
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
                  onChange={e => setEditingList(prev => ({...prev, sex : e.target.value}))}
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
                        setEditingList(prev => ({...prev , position: value}))
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
                  onChange={e => setEditingList(prev => ({...prev , info: e.target.value}))}
                  rules={[
                     {
                     required: true,
                     message: 'Вы должны ввесты доп инвормацию о контакте',
                     },
                     {min: 10,  message: 'доп инвормация должна состоять не менее 10 символов'}
                  ]}>
                  <TextArea rows={4} />
               </Form.Item>
               <Form.Item  {...tailLayout} onChange={e => setEditingList(prev => ({...prev, update: !prev.update}))} label="" name="update" valuePropName={"checked"}>
                  <Checkbox>Получать уведомление об обновлении</Checkbox>
               </Form.Item>
               
               <Form.Item 
                  {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                     Изменит Контакт
                  </Button>
               
               
               </Form.Item>
               </Form>
            </Col>
         </Row>
         
      </div>
    );
};

export default Editor;