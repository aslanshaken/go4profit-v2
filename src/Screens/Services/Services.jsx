import './Services.css'
import Nature from '../../Assets/nycity-2.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services(props) {
    const [trans, setTrans] = useState(false)
    const [bus, setBus] = useState(false)
    const [mtr, setMtr] = useState(false)
    const [cst, setCst] = useState(false)
    const [per, setPer] = useState(false)
    const { lang, setLang } = props
    function Filter() {
        if (lang == null || lang == 'eng') {
            return (
                <>
                    <p class="fs-3 mt-4">Businesses We Serve</p>
                    <div class="container-md mt-5 mb-5">
                        <p class="fs-5">We have a big team of professionals who have 5+ experience in each
                            industry. Each of them can do several types of financial analysis such as benchmarking,
                            ratio, trend etc.

                        </p>
                    </div>
                    <div class="container">
                        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setTrans(!trans)}>
                                            Transportation
                                        </div>
                                        {trans &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Moving Services</li>
                                                    <li class="list-group-item">Trucking</li>
                                                    <li class="list-group-item">Taxi</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setBus(!bus)}>
                                            Business & Information
                                        </div>
                                        {bus &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Consultant</li>
                                                    <li class="list-group-item">Travel Agency</li>
                                                    <li class="list-group-item">Video Production</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setMtr(!mtr)}>
                                            Motor Vehicle
                                        </div>
                                        {mtr &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Automotive Part Sales</li>
                                                    <li class="list-group-item">Car Wash/Detailing</li>
                                                    <li class="list-group-item">Motor Vehicle Rental</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover">
                                            Real Estate & Housing
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col">
                        <div class="p-3 border">
                            <div class="card" style={{ width: "18rem;" }}>
                                <div class="card-header fs-6 btn">
                                    Health Services
                                </div>
                            </div>
                        </div>
                    </div> */}
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setCst(!cst)}>
                                            Construction & Contracting
                                        </div>
                                        {cst &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">AC & Heating</li>
                                                    <li class="list-group-item">Building Construction</li>
                                                    <li class="list-group-item">Rental Other</li>
                                                    <li class="list-group-item">Plumbing Remodeling </li>
                                                    <li class="list-group-item">Repair/Maintenance</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setPer(!per)}>
                                            Personal Services
                                        </div>
                                        {per &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Animal Boarding</li>
                                                    <li class="list-group-item">Barber Shop</li>
                                                    <li class="list-group-item">Beauty Salon Cemetery</li>
                                                    <li class="list-group-item">Diet Center</li>
                                                    <li class="list-group-item">Dry cleaning/Laundry</li>
                                                    <li class="list-group-item">Entertainment/Party Rentals</li>
                                                    <li class="list-group-item">Event Planning</li>
                                                    <li class="list-group-item">Fitness Center</li>
                                                    <li class="list-group-item">Florist</li >
                                                    <li class="list-group-item">Funeral Director</li >
                                                    <li class="list-group-item">Janitorial / Cleaning Services</li >
                                                    <li class="list-group-item">Massage / Day Spa</li >
                                                    <li class="list-group-item">Nail Salon</li >
                                                    <li class="list-group-item">Personal Assistant</li >
                                                    <li class="list-group-item">Photography</li >
                                                    <li class="list-group-item">Tanning Salon</li >
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <p class="fs-3 mt-4">??????????????????????, ?????????????? ???? ??????????????????????</p>
                    <div class="container-md mt-5 mb-5">
                        <p class="fs-5">?? ?????? ?????????????? ?????????????? ???????????????????????????? ?? ???????????? ???????????? 5+ ?? ???????????? ??????????????.
                            ???????????? ???? ?????? ?????????? ?????????????????? ?????????????????? ?????????? ?????????????????????? ??????????????, ?????????? ?????? ???????????? ??????????????????????,
                            ???????????? ??????????????????, ?????????????????????????? ???????????? ?? ??.??.

                        </p>
                    </div>
                    <div class="container">
                        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setTrans(!trans)}>
                                            ??????????????????
                                        </div>
                                        {trans &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">???????????? ???? ????????????????</li>
                                                    <li class="list-group-item">????????????????????????????</li>
                                                    <li class="list-group-item">??????????</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setBus(!bus)}>
                                            ??????????????
                                        </div>
                                        {bus &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">??????????????????????</li>
                                                    <li class="list-group-item">?????????????????????????? ????????????????y</li>
                                                    <li class="list-group-item">?????????? ????????????????????????</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setMtr(!mtr)}>
                                            ????????????????????
                                        </div>
                                        {mtr &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">?????????????? ?????????????????????????? ??????????????????</li>
                                                    <li class="list-group-item">?????????? ?????????????????????? / ??????????????????????</li>
                                                    <li class="list-group-item">???????????? ??????????????????????</li>
                                                    <li class="list-group-item">???????????? ??????????????????????</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover">
                                            ???????????????????????? ?? ??????????
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setCst(!cst)}>
                                            ?????????????????????????? & ?????????????????? ????????????
                                        </div>
                                        {cst &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">?????????????????????? ?? ??????????????????</li>
                                                    <li class="list-group-item">???????????????????????? ??????????????????????</li>
                                                    <li class="list-group-item">???????????????????????? ??????????????????</li>
                                                    <li class="list-group-item">???????????? ????????????</li>
                                                    <li class="list-group-item">???????????? ????????????????????</li>
                                                    <li class="list-group-item">???????????? ?? ?????????????????????? ????????????????????????</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-6 btn hover" onClick={() => setPer(!per)}>
                                            ???????????????????????? ????????????
                                        </div>
                                        {per &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">???????????????? ?????? ????????????????</li>
                                                    <li class="list-group-item">????????????????????????????</li>
                                                    <li class="list-group-item">?????????????????????? ??????????</li>
                                                    <li class="list-group-item">?????????????????? / ??????????????????</li>
                                                    <li class="list-group-item">?????????????????????? / ???????????? ?????? ??????????????????</li>
                                                    <li class="list-group-item">???????????????????? ??????????????</li>
                                                    <li class="list-group-item">????????????-??????????</li>
                                                    <li class="list-group-item">??????????????</li>
                                                    <li class="list-group-item">???????????????? ?????????????????????? ????????</li>
                                                    <li class="list-group-item">???????????? / ?????????????????????? ????????????</li>
                                                    <li class="list-group-item">???????????? / ?????????????? ??????</li>
                                                    <li class="list-group-item">???????????????????? ??????????</li>
                                                    <li class="list-group-item">???????????? ??????????????????</li>
                                                    <li class="list-group-item">????????????????????</li>
                                                    <li class="list-group-item">??????????????</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )
        }
    }
    return (
        <div className="services-main-container">
            <div className="services-main-img"> <img className="services-img" src={Nature} /></div>
            {Filter()}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p class="fs-3 mt-4">Bookkeeping Services</p>
            <div className="services-all-plans">
                <div className="services-box">
                    <h3>StartUP</h3>
                    <hr />
                    <h5>Starting at</h5>
                    <h4><sup>$</sup>310 /monthly</h4>
                    <hr />
                    <h5>Account set up and monthly subscription in QBO</h5>
                    <hr />
                    <h5>Monthly recording, classifying and reconciling of up to 3 bank/credit card accounts </h5>
                    <hr />
                    <h5>Up to 125 transactions</h5>
                    <hr />
                    <h5>3 monthly financial reports (given of you in terms that you understand)</h5>
                    <hr />
                    <h5>Unlimited email support </h5>
                    <hr />
                    <h5>Monthly video analysis of your financial reports</h5>
                    <hr />
                    <h5>No contract (30 days notice required to cancel) </h5>
                    <hr />
                    <Link to="/book" id="none"><h5 className="services-book">Book a Call</h5></Link>
                </div>
                <div className="services-box">
                    <h3>Standard</h3>
                    <hr />
                    <h5>Starting at</h5>
                    <h4><sup>$</sup>460 /monthly</h4>
                    <hr />
                    <h5>Account set up and monthly subscription in QBO</h5>
                    <hr />
                    <h5>Monthly recording, classifying and reconciling of up to 4 bank/credit card accounts </h5>
                    <hr />
                    <h5>Up to 250 transactions</h5>
                    <hr />
                    <h5>3 monthly financial reports (explained in layman's terms for clarity)</h5>
                    <hr />
                    <h5>Unlimited email support </h5>
                    <hr />
                    <h5>Monthly video analysis of your financial reports</h5>
                    <hr />
                    <h5>No contract (30 days notice required to cancel) </h5>
                    <hr />
                    <Link to="/book" id="none"><h5 className="services-book">Book a Call</h5></Link>
                </div>
                <div className="services-box">
                    <h3>Premium</h3>
                    <hr />
                    <h5>Starting at</h5>
                    <h4><sup>$</sup>660 /monthly</h4>
                    <hr />
                    <h5>Account set up and monthly subscription in QBO</h5>
                    <hr />
                    <br />
                    <h5>Monthly recording, classifying and reconciling of up to 5 bank/credit card accounts </h5>
                    <hr />
                    <h5>3 monthly financial reports (explained in layman's terms for clarity)</h5>
                    <hr />
                    <h5>Unlimited email support </h5>
                    <hr />
                    <h5>Monthly video analysis of your financial reports OR monthly video call to chat face-to-face </h5>
                    <br />
                    <hr />
                    <h5>No contract (30 days notice required to cancel) </h5>
                    <hr />
                    <Link to="/book" id="none"><h5 className="services-book">Book a Call</h5></Link>
                </div>
                <div className="services-box-cleanup">
                    <h3>Clean Up Services</h3>
                    <hr />
                    <h5>Request Quote</h5>
                    <hr />
                    <h5>Book a call for custom pricing and packages</h5>
                    <hr />
                    <Link to="/book" id="none"><h5 className="services-book">Book a Call</h5></Link>
                </div>
            </div>
        </div >
    )
}