import './Home.css'
import { Link } from 'react-router-dom';
import Account from '../../Assets/account.jpg'
import People from '../../Assets/home-3.jpg'
import Phone from '../../Assets/phone.png'
import Choose from '../../Assets/choose2.png'
import Grow from '../../Assets/grow.png'

export default function Home(props) {
    const { lang, setLang } = props
    function Filter() {
        if (lang == null || lang == 'eng') {
            return (
                <>
                    <div class="container my-5">
                        <div class="row row-cols-2 align-items-center">
                            <div class="col">
                                <div class="p-3 google-font  main-text">
                                    Minimize bookkeeping
                                    <br></br>
                                    and
                                    <br></br>
                                    Maximize profit
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={People} class="img-fluid" alt="people" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-md mt-5 mb-5">
                        <p class="fs-4">"I don’t really enjoy the Bookkeeping part of my business,
                            but I will get to it. It’s on my To-Do list."I've heard that. Many times. But they usually don't.
                            If this is you, then YOU need to be honest with yourself.
                            Are you really going to get to it? Do you struggle
                            (like most business owners) with organizing & understanding
                            your financial records? Do you feel overwhelmed, stressed, &
                            unsure of what to do or how to do it when it comes to keeping
                            books? We take care of the books, help you create a system
                            where all your receipts & paperwork are organized, and we
                            walk you through your finances so you have an understanding
                            each month of how your business is doing. No more guessing.
                            This creates peace of mind (or lights a fire under you
                            if you're not where you want to be).
                        </p>
                    </div>
                    <div className='home-main-steps'>
                        <div><Link to="/book" id="none"><img src={Phone} /> <h2>1. Schedule a free consultation</h2></Link></div>
                        <div><Link to="/services" id="none"><img src={Choose} /> <h2>2. Choose a plan</h2></Link></div>
                        <div><img src={Grow} /> <h2>3. Save and Grow </h2></div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div class="container my-5">
                        <div class="row row-cols-2 align-items-center">
                            <div class="col">
                                <div class="p-3 google-font main-text">
                                    Minimize bookkeeping
                                    <br></br>
                                    and
                                    <br></br>
                                    Maximize profit
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={People} class="img-fluid" alt="people" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-md mt-5 mb-5">
                        <p class="fs-4">
                            “Мне не очень нравится бухгалтерская часть моего бизнеса, но я доберусь до нее. Это в моем списке дел».
                            Я это слышала. Много раз. Но обычно они этого не делают. Если это вы,
                            то ВЫ должны быть честны с собой. Вы действительно до этого доберетесь? Вам сложно
                            (как и большинство владельцев бизнеса) понять финансовую отчетность вашей компании?
                            Вы чувствуете себя подавленным, напряженным и неуверенным в том, что делать или как
                            это делать, когда дело доходит до ведения бухгалтерского учета? Мы заботимся о бухгалтерских
                            книгах, помогаем вам создать систему, в которой упорядочены все ваши квитанции и документы,
                            и мы объясним вам ваши финансовые отчеты, чтобы вы каждый месяц понимали, как обстоят дела у
                            вашего бизнеса. Больше никаких догадок. Это создает душевное спокойствие.
                        </p>
                    </div>
                    <div className='home-main-steps'>
                        <div><Link to="/book" id="none"><img src={Phone} /> <h2>1. Schedule a free consultation</h2></Link></div>
                        <div><Link to="/services" id="none"><img src={Choose} /> <h2>2. Choose a plan</h2></Link></div>
                        <div><img src={Grow} /> <h2>3. Save and Grow </h2></div>
                    </div>

                </>)
        }
    }
    return (
        <div className="home-main-container smcolor ">
            <img src={Account} class="img-fluid" alt="account"></img>
            {Filter()}
            <p class="fs-1 mt-5">Bookkeeping Services</p>
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