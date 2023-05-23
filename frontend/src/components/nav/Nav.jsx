 import "./nav.css"
 import { Link } from "react-router-dom"
const Nav = () => {
    const user=false
  return (
    <div className="nav">
        
        <div className="logo">logo</div>
        <div className="links">
         <Link to={"/"}>  <p>Home</p> </Link> 
         <Link to={"/about"}>  <p>about</p> </Link> 
         {user&&  <Link to={"/create"}>  <p>create</p> </Link> }
        

        </div>
        {user?(<div className="logouttt">
            <div className="userinfo">
                <p>name</p>
                <img className="profilepic" src="https://th.bing.com/th/id/OIP.x23yNUaqf--1d4vp9Omf7QHaLQ?w=125&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>
            
             <button>logout</button></div>):( <div className="buttons">

<Link to={"/login"}> <button>Login/Register</button></Link> 
</div>)}

       
    </div>
  )
}

export default Nav