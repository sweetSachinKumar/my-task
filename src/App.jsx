import Home from './pages/Home'

import NavBar from './components/NavBar'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import CreateTask from './pages/CreateTask'
import NofoundPage from './components/NofoundPage'
import FormEdit from './components/FormEdit' 

function App() {
  if(localStorage.getItem("myAllTasks")=== null){
    localStorage.setItem("myAllTasks",JSON.stringify([]))
   }
  return (
    <>
    <Router>
    <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addtoTask' element={<CreateTask/>} />
        <Route path='/editTask/:id' element={<FormEdit/>} /> 

        <Route path='*' element={<NofoundPage/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
