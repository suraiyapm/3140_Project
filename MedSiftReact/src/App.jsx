//APP.jsx is basically a component "wrapper" for all of our other components. 
//It's where we link them all together and export to be rendered by main.jsx. 
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import { Journals, Home, Notes, Dashboard, About, Register, Login} from "./pages";
import { Navigation } from "./components"



function App() {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
 
  async function grabUserIdFromStorage() {
    if(!userId){
      setUserId( window.localStorage.getItem('userId'));
    }
  }

  useEffect(() => {
    grabUserIdFromStorage();
  }, []);
  
  return (
    <> 
    <Navigation navigate={navigate}/>
    <div className='main-content'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard userId={userId} setUserId={setUserId} navigate={navigate}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home navigate={navigate}/>} />
        <Route path="/journals" element={<Journals navigate={navigate} userId={userId}/>} />
        <Route path="/notes" element={<Notes navigate={navigate} userId={userId}/>} />
        <Route path="/register" element={<Register navigate={navigate} setUserId={setUserId} />} />
        <Route path="/login" element={<Login navigate={navigate} setUserId={setUserId} />} />
        </Routes> 
    </div>
    </>
  )
}

export default App
