 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import  Register  from "./pages/register/Register"
import Login from "./pages/login/Login"
import SinglePost from "./pages/single post/SinglePost"
import About from "./pages/about/About"
import Nav from "./components/nav/Nav"
function App() {
 
  return (
    <>

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    
      <Route path="/register" element={<Register/>} />
      <Route path="/post/:id" element={<SinglePost/>}/> 
      <Route path="/about" element={<About/>}/> 

      
    </Routes>
     
       
    </BrowserRouter>
    </>
  )
}

export default App
