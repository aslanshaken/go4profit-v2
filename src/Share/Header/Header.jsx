import './Header.css'
import Logo from '../../Assets/logo-new.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function Nav() {
    const [close, setClose] = useState(false)
    return (
        <div>
            <div className="header-container">
            <Link to="/"><img className='logo' src={Logo} /></Link>
                <Link to="/about" id="none"><div className="header-text">About Me</div></Link>
                <Link to="/services" id="none"><div className="header-text">Services</div></Link>
                <Link to="/contact" id="none"><div className="header-text">Contact</div></Link>
                <Link to="#" id="none"><div className="header-text">(917)-200-7609</div></Link>
                <Link to="/book" id="none"><div className="header-book-call">Book A Call</div></Link>
            </div>

            {/* CELL PHONE */}
            <div className='header-cell-container' >
                <div>
                    <Link to="/"><img className='logo-cell' src={Logo} /></Link>
                </div>
                <img
                    id="nav-img"
                    onClick={() => setClose(!close)}
                    src="https://img.icons8.com/cotton/64/000000/menu.png"
                />
                {close &&
                    <>
                        <div className="header-cell-box">
                            <img
                                id="nav-close-img"
                                onClick={() => setClose(!close)}
                                src={close
                                    ? "https://img.icons8.com/ios/50/000000/circled-x.png"
                                    : "https://img.icons8.com/cotton/64/000000/menu.png"
                                }
                            />
                            <Link to="/" id="none"><div className="header-text" onClick={() => setClose(!close)}>Home</div></Link>
                            <Link to="/about" id="none"><div className="header-text" onClick={() => setClose(!close)}>About Me</div></Link>
                            <Link to="/services" id="none"><div className="header-text" onClick={() => setClose(!close)}>Services</div></Link>
                            <Link to="/contact" id="none"><div className="header-text" onClick={() => setClose(!close)}>Contact</div></Link>
                            <Link to="#" id="none"><div className="header-text" onClick={() => setClose(!close)}>(917)-200-7509</div></Link>
                            <Link to="/book" id="none"><div className="header-book-call" onClick={() => setClose(!close)}>Book A Call</div></Link>
                        </div>
                    </>}
            </div>

        </div>
    )
}