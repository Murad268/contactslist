import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Suspense } from 'react';
import Header from "./components/Header/Header";
import ContactsPage from './containers/ContactsPage';
function App() {

  return (


<main className="main container">
    <Router>
      <Suspense fallback="loading...">
        <Header/>
        <Routes>
        
        
          <Route path="/" element={<Navigate to="/contacts" replace/>} ></Route>
          <Route path='/contacts' element={<ContactsPage/>}/>
  
        </Routes>
      </Suspense>
  </Router>
  </main>
  );
}

export default App;
