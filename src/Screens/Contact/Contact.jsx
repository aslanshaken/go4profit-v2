import './Contact.css'
import City from '../../Assets/contact-18.jpg'
import Call from '../../Assets/call-us.png'
import Email from '../../Assets/email-5.png'
import Social from '../../Assets/social.png'

export default function Contact() {
    return (
        <div className="contact-main-container">
            <div className="contact-main-img"> <img className="contact-img" src={City} /></div>
            <p id='contact'>Contact Information</p>
            <div className='contact-main-boxes'>
                <div className="contact-box">
                    <h4>Call Us</h4>
                    <a href="tel:+9172007609" id="none"><img src={Call} /></a>
                    <h5><a href="tel:+19172007609" id="none">+1(917)-200-7609</a></h5>
                </div>
                <div className="contact-box">
                    <h3>Email Us</h3>
                    <a href="mailto:ainurbookkeeper@gmail.com" id="none"><img src={Email} /></a>
                    <h5><a href="mailto:ainurbookkeeper@gmail.com" id="none">ainurbookkeeper@gmail.com</a></h5>
                </div>
                <div className="contact-box">
                    <h4>Social Media</h4>
                    <a href='https://www.linkedin.com/in/ainurzhunussova/' id="none" target="_blank" ><img src={Social} /></a>
                    <h5><a href='https://www.linkedin.com/in/ainurzhunussova/' id="none" target="_blank" >Linkedin </a></h5>
                </div>
            </div>
        </div>
    )
}