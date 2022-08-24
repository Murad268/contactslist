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