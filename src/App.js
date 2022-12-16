import logo from './logo.svg';
import './App.css';
import About from './component/About';
import {useState} from 'react'
import Home from './component/Home';
import Services from './component/Services';
import Contact from './component/Contact';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

function App() {

  const  navigate=useNavigate();
const [state, setstate] = useState(false)
  function myfun1(){
setstate(1)
setTimeout(()=>{
  setstate(false)
  navigate('/')
  
}, 1000)
  }

function myfun2(){
  setstate(2)

  setTimeout(()=>{
    setstate(false)
    navigate('/about')
    
  }, 1000)
}

function myfun3(){
  setstate(3)
  setTimeout(()=>{
    setstate(false)
    navigate('/services')
   
  }, 1000)}

  function myfun4(){
    setstate(4)
    setTimeout(()=>{
      setstate(false)
      navigate('/contact')
      
    }, 1000)}
  return (
    <div>

      <button onClick={myfun1}>clickme</button>
      <button onClick={myfun2}>clickme</button>
      <button onClick={myfun3}>clickme</button>
      <button onClick={myfun4}>clickme</button>

      <Routes>
        <Route path="/" element={<Home state={state}/>}></Route>
        <Route path="/about" element={<About state={state}/>}></Route>
        <Route path="/services" element={<Services state={state}/>}></Route>
        <Route path="/contact" element={<Contact state={state}/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
