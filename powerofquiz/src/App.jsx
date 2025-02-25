import './App.css'
import { Routes, Route} from 'react-router-dom';
import Qustion from './Qustion'
import Home from './Home';
import Provider from './Context';
function App() {
  return (
    <Provider>
      <div style={{height:"100vh",background:"#bdbdbd",display:"flex",justifyContent:"center",alignItems:"center"}}>
     {/* {  <Home/>} */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/qustion/:id" element={<Qustion/>}/>
     </Routes>
    </div>
    </Provider>
  )
}

export default App
