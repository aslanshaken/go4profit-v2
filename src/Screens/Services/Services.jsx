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
                    <p class="fs-1 mt-4">Businesses We Serve</p>
                    <div class="container-md mt-5 mb-5">
                        <p class="fs-4">We have a big team of professionals who have 5+ experience in each
                            industry. Each of them can do several types of financial analysis such as benchmarking,
                            ratio, trend etc.

                        </p>
                    </div>
                    <div class="container">
                        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover" onClick={() => setTrans(!trans)}>
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
                                        <div class="card-header fs-5 btn hover" onClick={() => setBus(!bus)}>
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
                                        <div class="card-header fs-5 btn hover" onClick={() => setMtr(!mtr)}>
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
                                        <div class="card-header fs-5 btn hover">
                                            Real Estate & Housing
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col">
                        <div class="p-3 border">
                            <div class="card" style={{ width: "18rem;" }}>
                                <div class="card-header fs-5 btn">
                                    Health Services
                                </div>
                            </div>
                        </div>
                    </div> */}
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover" onClick={() => setCst(!cst)}>
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
                                        <div class="card-header fs-5 btn hover" onClick={() => setPer(!per)}>
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
                    <p class="fs-1 mt-4">ПРЕДПРИЯТИЯ, КОТОРЫЕ МЫ ОБСЛУЖИВАЕМ</p>
                    <div class="container-md mt-5 mb-5">
                        <p class="fs-4">У нас большая команда профессионалов с опытом работы 5+ в каждой отрасли.
                            Каждый из них может выполнять несколько видов финансового анализа, таких как анализ соотношения,
                            анализ тенденций, сравнительный анализ и т.д.

                        </p>
                    </div>
                    <div class="container">
                        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover" onClick={() => setTrans(!trans)}>
                                            Транспорт
                                        </div>
                                        {trans &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Услуги по переезду</li>
                                                    <li class="list-group-item">Грузоперевозки</li>
                                                    <li class="list-group-item">Такси</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover" onClick={() => setBus(!bus)}>
                                            Бизнесы
                                        </div>
                                        {bus &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Консультант</li>
                                                    <li class="list-group-item">Туристическое агенствоy</li>
                                                    <li class="list-group-item">Видео Производство</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover" onClick={() => setMtr(!mtr)}>
                                            Автомобиль
                                        </div>
                                        {mtr &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Продажа автомобильных запчастей</li>
                                                    <li class="list-group-item">Мойка автомобилей / Детализация</li>
                                                    <li class="list-group-item">Прокат автомобилей</li>
                                                    <li class="list-group-item">Ремонт автомобилей</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover">
                                            Недвижимость и жилье
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col">
                        <div class="p-3 border">
                            <div class="card" style={{ width: "18rem;" }}>
                                <div class="card-header fs-5 btn">
                                    Health Services
                                </div>
                            </div>
                        </div>
                    </div> */}
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover" onClick={() => setCst(!cst)}>
                                            Строительство & Подрядные работы
                                        </div>
                                        {cst &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Кондиционер и отопление</li>
                                                    <li class="list-group-item">Строительная конструкция</li>
                                                    <li class="list-group-item">Строительная инспекция</li>
                                                    <li class="list-group-item">Прочая аренда</li>
                                                    <li class="list-group-item">Ремонт сантехники</li>
                                                    <li class="list-group-item">Ремонт и техническое обслуживание</li>
                                                </ul>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border">
                                    <div class="card" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-5 btn hover" onClick={() => setPer(!per)}>
                                            Персональные услуги
                                        </div>
                                        {per &&
                                            <>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Интернат для животных</li>
                                                    <li class="list-group-item">Парикмахерская</li>
                                                    <li class="list-group-item">Диетический центр</li>
                                                    <li class="list-group-item">Химчистка / Прачечная</li>
                                                    <li class="list-group-item">Развлечения / Аренда для вечеринок</li>
                                                    <li class="list-group-item">Планировка события</li>
                                                    <li class="list-group-item">Фитнес-центр</li>
                                                    <li class="list-group-item">Флорист</li>
                                                    <li class="list-group-item">Директор похоронного бюро</li>
                                                    <li class="list-group-item">Уборка / Клининговые услуги</li>
                                                    <li class="list-group-item">Массаж / Дневной спа</li>
                                                    <li class="list-group-item">Маникюрный салон</li>
                                                    <li class="list-group-item">Личный ассистент</li>
                                                    <li class="list-group-item">Фотография</li>
                                                    <li class="list-group-item">Солярий</li>
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
            <p class="fs-1 mt-4">Bookkeeping Services</p>
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
                    <hr />
                    <h3>Book a call for custom pricing and packages</h3>
                    <hr />
                    <Link to="/book" id="none"><h4 className="services-book">Book a Call</h4></Link>
                </div>
            </div>
        </div >
    )
}