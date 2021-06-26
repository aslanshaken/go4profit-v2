import './Home.css'
import { Link } from 'react-router-dom';
import Account from '../../Assets/account.jpg'
import People from '../../Assets/home-3.jpg'
import Phone from '../../Assets/phone.png'
import Choose from '../../Assets/choose2.png'
import Grow from '../../Assets/grow.png'

export default function Home() {
    return (
        <div className="home-main-container">
            <div className="home-main-img">
                <img className="home-img" src={Account} />
            </div>
            <div className="home-boxes">
                <div className="home-img-text">
                    <h2>BOOKKEEPING SERVICES
                        FOR ALL TYPE OF BUSINESSES</h2>
                    <h4>Get started today with a free consultation!</h4>
                    <h3>As a bookkeeper, we can take the chore of maintaining your business’s books and
                        allow you to grow your business.  We’ll ensure your books are accurate and your
                        reports are timely.  This will ensure you are well equipped to make important
                        financial decisions</h3>
                </div>
                <div>
                    <img className="home-box-image" src={People} />
                </div>
            </div>
            <div className='home-main-steps'>
                <div><Link to="/book" id="none"><img src={Phone} /> <h2>1. Schedule a free consultation</h2></Link></div>
                <div><Link to="/services" id="none"><img src={Choose} /> <h2>2. Choose a plan</h2></Link></div>
                <div><img src={Grow} /> <h2>3. Save and Grow </h2></div>
            </div>
            <p id='home-bookkeeping'>Bookkeeping Services</p>
            <div className="home-all-plans">
                <div className="home-box">
                    <h1>StartUP</h1>
                    <hr />
                    <h4>Starting at</h4>
                    <h2><sup>$</sup>310 /monthly</h2>
                    <hr />
                    <h4>Account set up and monthly subscription in QBO</h4>
                    <hr />
                    <h4>Monthly recording, classifying and reconciling of up to 3 bank/credit card accounts </h4>
                    <hr />
                    <h4>Up to 125 transactions</h4>
                    <hr />
                    <h4>3 monthly financial reports (given of you in terms that you understand)</h4>
                    <hr />
                    <h4>Unlimited email support </h4>
                    <hr />
                    <h4>Monthly video analysis of your financial reports</h4>
                    <hr />
                    <h4>No contract (30 days notice required to cancel) </h4>
                    <hr />
                    <Link to="/book" id="none"><h4 className="home-book">Book a Call</h4></Link>
                </div>
                <div className="home-box">
                    <h1>Standard</h1>
                    <hr />
                    <h4>Starting at</h4>
                    <h2><sup>$</sup>460 /monthly</h2>
                    <hr />
                    <h4>Account set up and monthly subscription in QBO</h4>
                    <hr />
                    <h4>Monthly recording, classifying and reconciling of up to 4 bank/credit card accounts </h4>
                    <hr />
                    <h4>Up to 250 transactions</h4>
                    <hr />
                    <h4>3 monthly financial reports (explained in layman's terms for clarity)</h4>
                    <hr />
                    <h4>Unlimited email support </h4>
                    <hr />
                    <h4>Monthly video analysis of your financial reports</h4>
                    <hr />
                    <h4>No contract (30 days notice required to cancel) </h4>
                    <hr />
                    <Link to="/book" id="none"><h4 className="home-book">Book a Call</h4></Link>
                </div>
                <div className="home-box">
                    <h1>Premium</h1>
                    <hr />
                    <h4>Starting at</h4>
                    <h2><sup>$</sup>660 /monthly</h2>
                    <hr />
                    <h4>Account set up and monthly subscription in QBO</h4>
                    <hr />
                    <h4>Monthly recording, classifying and reconciling of up to 5 bank/credit card accounts </h4>
                    <hr />
                    <h4>3 monthly financial reports (explained in layman's terms for clarity)</h4>
                    <hr />
                    <h4>Unlimited email support </h4>
                    <hr />
                    <h4>Monthly video analysis of your financial reports OR monthly video call to chat face-to-face </h4>
                    <br />
                    <hr />
                    <h4>No contract (30 days notice required to cancel) </h4>
                    <hr />
                    <Link to="/book" id="none"><h4 className="home-book">Book a Call</h4></Link>
                </div>
                <div className="home-box-cleanup">
                    <h2>Clean Up Service</h2>
                    <hr />
                    <h3>Request Quote</h3>
                    <hr />
                    <h3>Book a call for custom pricing and packages</h3>
                    <hr />
                    <Link to="/book" id="none"><h4 className="home-book">Book a Call</h4></Link>
                </div>
            </div>
            <div className='home-footer'>
                <h2>Are you tired from trying to keep up with your bookkeeping?
                    <hr />
                    We take the stress out of bookkeeping and we’re in the next door, virtually.</h2>
            </div>
        </div>
    )
}