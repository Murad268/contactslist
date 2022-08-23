import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ContactsPage from './containers/ContactsPage';
import NewContactPage from './containers/NewContactPage';
import EditPage from './containers/EditPage';
function App() {

  return (


<main className="main container">
    <Router>
      <Suspense fallback="loading...">
        
        <Routes>   
          <Route path="/" element={<Navigate to="/contacts" replace/>} ></Route>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/contacts/new' element={<NewContactPage/>}/>
          <Route path='/contacts/edit/:id' element={<EditPage/>}/>
        </Routes>
      </Suspense>
  </Router>
  <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
  </main>
  );
}


export default App;
