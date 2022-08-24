import React, {useState} from 'react';
import { fields, tailLayout, antdImports, rules } from '../../utils/formUtils';
import { useContacts } from '../../contexts/contactsContext';
import { useParams } from 'react-router-dom';
import styles from './editor.module.scss';
const Editor = () => {
   const { Button, Form, Input, Select, Radio, Checkbox, Row, Col, TextArea , Option} = antdImports
   const [form] = Form.useForm();
   const {contactsList, position, setContact} = useContacts();
   const {id} = useParams();
   const [editingList, setEditingList] = useState(contactsList.find(item => item.id === id))
  
   const onSubmit = () => {setContact(id, editingList)}
 
   return (
      <div className={styles.edit}>
         <h1>Изменит контакт</h1>
         <Row>
            <Col md={{span: 12, offset: 6}}>
               <Form  layout="horizontal" form={form} name="control-hooks" onFinish={onSubmit}  labelCol={{span: 5}}
               fields={fields(editingList)} >
               <Form.Item name="name" label={<label>Имя</label>} onChange={e => setEditingList(prev => ({...prev, name : e.target.value}))}
                  rules={rules["name"]}>
                  <Input />
               </Form.Item>
               <Form.Item name="surname" label={<label>Фамилия</label>} onChange={e => setEditingList(prev => ({...prev, surname : e.target.value}))}
                  rules={rules["surname"]} >
                  <Input />
               </Form.Item>
               <Form.Item name="patronymic" label={<label>Отчество</label>} onChange={e => setEditingList(prev => ({...prev, patronymic : e.target.value}))}
                  rules={rules["patronymic"]}>
                  <Input />
               </Form.Item>
               <Form.Item name="email" label={<label>Почта</label>} onChange={e => setEditingList(prev => ({...prev, email : e.target.value}))}
                  rules={rules["email"]}>
                  <Input />
               </Form.Item>
               <Form.Item label={<label>Пол</label>}onChange={e => setEditingList(prev => ({...prev, sex : e.target.value}))} name="sex"
                  rules={rules["sex"]}>
                  <Radio.Group>
                     <Radio value="male">мужской</Radio>
                     <Radio value="female">женский</Radio>
                  </Radio.Group>
               </Form.Item>
               <Form.Item name="position" label={<label>Должность</label>} rules={rules["position"]}>
                  <Select onChange={(value) => {setEditingList(prev => ({...prev , position: value}))}} placeholder="Выбери должность контакта" allowClear>
                  {
                     position.map(pos => {
                        return  <Option key={pos.name} value={pos.name}>{pos.name}</Option>
                     })
                  }
                  </Select>
               </Form.Item>
               <Form.Item label={<label>Доп Инфо</label>} name="info" onChange={e => setEditingList(prev => ({...prev , info: e.target.value}))}
                  rules={rules["info"]}>
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