import './Header.css'
import Logo from '../../Assets/logo-new.png'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="header-container">
            <Link to="/" id="none"><div className="header-text">About Me</div></Link>
            <Link to="/services" id="none"><div className="header-text">Services</div></Link>
            <Link to="#" id="none"><div className="header-text">Blog</div></Link>
            <Link to="/"><img className='logo' src={Logo}/></Link>
            <Link to="/contact" id="none"><div className="header-text">Contact</div></Link>
            <Link to="#" id="none"><div className="header-text">(917)-200-7509</div></Link>
            <Link to="/book" id="none"><div className="header-book-call">Book A Call</div></Link>
        </div>
    )
}