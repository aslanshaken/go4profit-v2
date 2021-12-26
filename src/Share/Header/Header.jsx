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