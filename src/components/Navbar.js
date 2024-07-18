import Button from "./Button";
import './Navbar.css'
import logo from '../assets/welcome.png'
function Navbar(){

    return (
       <div className="nav">
        <div className="Left">
            <img src={logo} alt="Logo" className="logoImg"></img>
        </div>
        <div className="right">
            <Button data="Register"></Button>
             <Button data="Login"></Button>
        </div>
       </div>
    );
}
export default Navbar