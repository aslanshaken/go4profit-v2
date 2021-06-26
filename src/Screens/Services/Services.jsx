import './Services.css'
import Nature from '../../Assets/nycity-2.jpg'
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="services-main-container">
            <div className="services-main-img"> <img className="services-img" src={Nature} /></div>
            <p id='bookkeeping'>Bookkeeping Services</p>
            <div className="services-all-plans">
                <div className="services-box">
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
                    <Link to="/book" id="none"><h4 className="services-book">Book a Call</h4></Link>
                </div>
                <div className="services-box">
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
                    <Link to="/book" id="none"><h4 className="services-book">Book a Call</h4></Link>
                </div>
                <div className="services-box">
                    <h1>Premium</h1>
                    <hr />
                    <h4>Starting at</h4>
                    <h2><sup>$</sup>660 /monthly</h2>
                    <hr />
                    <h4>Account set up and monthly subscription in QBO</h4>
                    <hr />
                    <br />
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
                    <Link to="/book" id="none"><h4 className="services-book">Book a Call</h4></Link>
                </div>
                <div className="services-box-cleanup">
                    <h2>Clean Up Services</h2>
                    <hr />
                    <h3>Request Quote</h3>
                    <hr/>
                    <h3>Book a call for custom pricing and packages</h3>
                    <hr/>
                    <Link to="/book" id="none"><h4 className="services-book">Book a Call</h4></Link>
                </div>
            </div>
        </div>
    )
}