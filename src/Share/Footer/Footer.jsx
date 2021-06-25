import './Footer.css'
import Logo from '../../Assets/logo-new.png'

export default function Foot() {
    return (
        <div>
            <div className="footer-main-container">
                <div className="footer-box">
                    <img src={Logo} />
                    <p>
                        1 Liberty St #226,
                        <br />
                        New York, NY 10006
                        <br />
                        <br />
                        ainurbookkeeper@gmail.com
                        <br />
                        <br />
                        (917)-200-7609
                    </p>
                </div>
                <div className="footer-box">
                    <iframe
                        className="footer-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873.5558803052458!2d-74.00977095783533!3d40.709691739914255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19e00fffff%3A0xd81170f750bf2e36!2sOne%20Liberty%20Plaza!5e0!3m2!1sen!2sus!4v1624581754745!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <h4>© Copyright 2021 | All Rights Reserved | by Aslan Shaken</h4>
        </div>
    )
}