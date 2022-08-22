import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Suspense } from 'react';
import ContactsPage from './containers/ContactsPage';
import NewContactPage from './containers/NewContactPage';
function App() {

  return (


<main className="main container">
    <Router>
      <Suspense fallback="loading...">
        
        <Routes>
        
        
          <Route path="/" element={<Navigate to="/contacts" replace/>} ></Route>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/contacts/new' element={<NewContactPage/>}/>
        </Routes>
      </Suspense>
  </Router>
  </main>
  );
}


export default App;
