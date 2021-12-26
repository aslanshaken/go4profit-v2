import './Header.css'
import Logo from '../../Assets/logo-new.png'
import Logo2 from '../../Assets/logo-2.jpeg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Form, Navbar, Container } from 'react-bootstrap';

export default function Nav(props) {
    const { lang, setLang } = props
    function Filter() {
        if (lang == null || lang == 'eng') {
            return (
                <>
                    <ul class="nav justify-content-end mt-4 me-5">
                        <li class="nav-item">
                            <Form.Select variant="outline-primary" onChange={(e) => setLang(e.target.value)} >
                                <option value="eng">English</option>
                                <option value="rus">Russian</option>
                            </Form.Select>
                        </li>
                    </ul>
                    <Link to="/">
                        <img src={Logo} class="img-fluid image-size mt-2 " alt="logo" />
                    </Link>
                    <ul class="nav justify-content-center mt-3 mb-5">
                        <li class="nav-item">
                            <Link to="/about" id="none">
                                <div className="header-text">About Me</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/services" id="none">
                                <div className="header-text">Services</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" id="none">
                                <div className="header-text">Contact</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" id="none">
                                <div className="header-text">(917)-200-7609</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/book" id="none">
                                <div className="header-book-call">Book A Call</div>
                            </Link>
                        </li>
                    </ul>
                </>
            )
        }
        else
            return (
                <>
                    <ul class="nav justify-content-end mt-4 me-5">
                        <li class="nav-item">
                            <Form.Select variant="outline-primary" onChange={(e) => setLang(e.target.value)} >
                                <option value="eng">English</option>
                                <option value="rus">Russian</option>
                            </Form.Select>
                        </li>
                    </ul>
                    <Link to="/">
                        <img src={Logo} class="img-fluid image-size mt-2 " alt="logo" />
                    </Link>
                    <ul class="nav justify-content-center mt-3 mb-5">
                        <li class="nav-item">
                            <Link to="/about" id="none">
                                <div className="header-text">O компании</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/services" id="none">
                                <div className="header-text">Индустрии</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" id="none">
                                <div className="header-text">Контакт</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" id="none">
                                <div className="header-text">(917)-200-7609</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/book" id="none">
                                <div className="header-book-call">Консультация</div>
                            </Link>
                        </li>
                    </ul>
                </>
            )

    }
    return (
        <div>
            {Filter()}
        </div>
    )
}





{/* CELL PHONE */ }
{/* <div className='header-cell-container' >
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
            </div> */}