import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import { ContactsContextProvider } from './contexts/contactsContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContactsContextProvider>
    <App />
  </ContactsContextProvider>
);


