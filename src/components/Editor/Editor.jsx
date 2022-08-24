import React, {useState} from 'react';
import styles from './editor.module.scss';
import { useContacts } from '../../contexts/contactsContext';
import { useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Radio, Checkbox, Row, Col } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

const Editor = () => {
   const [form] = Form.useForm();
   const {contactsList, position, setContact} = useContacts();
   const {id} = useParams();
   const [editingList, setEditingList] = useState(contactsList.find(item => item.id === id))
  
 
   const onSubmit = (e) => {
      setContact(id, editingList);
   }
   const tailLayout = {
      wrapperCol: {
        offset: 5,
        span: 16,
      },
    };
   return (
      <div className={styles.edit}>
         <h1>Изменит контакт</h1>
         <Row>
            <Col md={{span: 12, offset: 6}}>
               <Form  layout="horizontal" form={form} name="control-hooks" onFinish={onSubmit}   
               labelCol={{span: 5}}
               fields={[
                  {
                    name: ["name"],
                    value: editingList.name
                  },
                  {
                     name: ["surname"],
                     value: editingList.surname
                  },
                  {
                     name: ["patronymic"],
                     value: editingList.patronymic
                  },
                  {
                     name: ["email"],
                     value: editingList.email
                  },
                  {
                     name: ["position"],
                     value: editingList.position
                  },
                  {
                     name: ["sex"],
                     value: editingList.sex
                  },
                  {
                     name: ["update"],
                     value: editingList.update
                  },
                  {
                     name: ["info"],
                     value: editingList.info
                  },
                ]}
               >
               <Form.Item
                  name="name"
                  label={<label>Имя</label>}
                  rules={[
                     {
                     required: true,
                     message:"Вы должны ввести имя контака"
                     },
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
                     message:"Вы должны ввести фамилию контака"
                     },
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
                     message:"Вы должны ввести отчество контака"
                     },
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