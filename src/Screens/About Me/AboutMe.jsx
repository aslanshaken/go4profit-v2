import './AboutMe.css'
import { Link } from 'react-router-dom';
import City from '../../Assets/9.jpg'
import Ainura from '../../Assets/Ainura.jpeg'
import Phone from '../../Assets/phone.png'
import Choose from '../../Assets/choose2.png'
import Grow from '../../Assets/grow.png'
import Launch from '../../Assets/certicate-1.png'
import Launch2 from '../../Assets/certificate-10.png'

export default function AboutMe(props) {
    const { lang, setLang } = props
    function Filter() {
        if (lang == null || lang == 'eng') {
            return (
                <>
                    <div className="about-me-main-img"> <img className="about-me-img" src={City} /></div>
                    <div className="about-me">
                        <div>
                            <h5>Hi! I'm Amy, your Virtual Bookkeeper and Financial Part of your Brain!</h5>
                            <div className="about-me-text ">
                                <p>
                                    <br />
                                    <br />I am thrilled that you found my site! I'm Amy, CEO of Go4Profit
                                    Bookkeeping Services and the one you'll be working closely with. I am
                                    a trusted partner to my clients because I always treat their business
                                    as my own. I know how hard it is for a business owner to carry all
                                    the weight and perform multiple tasks at the same time. You started
                                    your business because you are passionate about your customers, not
                                    managing your own books, so let me do it for you. I not only want
                                    to help you be more organized, but I also want to help you and your
                                    business grow and help gain control over your finances.
                                    <br />
                                    <br />
                                    I have seen plenty of business owners trying to
                                    gather their finances in a hurry to make sure
                                    they don’t miss tax filing deadlines. One of
                                    the biggest misconceptions is that business
                                    needs to have the books done just for taxes.
                                    In fact, knowing how to read your financial
                                    statements could lead you to a more prosperous
                                    and profitable entity.
                                </p>
                                <p>
                                    <br />
                                    <br />
                                    You want to partner with a bookkeeper that would
                                    understand your business needs, someone you could
                                    brainstorm ideas and consult with, share your concerns
                                    and success. I can help you stay in control of your numbers!
                                    <br />
                                    <br />
                                    When I partner with my clients it is a professional commitment
                                    that brings value. I record transactions, hold meetings to discuss
                                    the financial reports, make suggestions by providing honest
                                    feedback, come up with profitability and budgeting strategies
                                    and create a useful system for your business.
                                </p>
                            </div>
                        </div>
                        <div><img className="about-me-ainura" src={Ainura} /></div>
                    </div>
                </>
            )
        }
        else
            return (
                <>
                    <div className="about-me-main-img"> <img className="about-me-img" src={City} /></div>
                    <div className="about-me">
                        <div>
                            <h5>Привет! Я Эми, ваш виртуальный бухгалтер и финансовая часть вашего мозга!
                            </h5>
                            <div className="about-me-text">
                                <p>
                                    <br />
                                    <br />Я очень рада, что вы нашли мой сайт! Я Эми, генеральный директор
                                    Go4Profit Bookkeeping Services и та, с которой вы будете тесно сотрудничать.
                                    Я являюсь надежным партнером для своих клиентов, потому что всегда отношусь
                                    к их бизнесу как к своему собственному. Я знаю, как тяжело владельцу бизнеса
                                    нести всю тяжесть и одновременно выполнять несколько задач. Я не только
                                    хочу помочь вам стать более организованным, но также хочу помочь вам и
                                    вашему бизнесу расти и помочь получить контроль над своими финансами.
                                    <br />
                                    <br />
                                    Я видела множество владельцев бизнеса, которые в спешке пытались собрать
                                    свои финансовые данные, чтобы убедиться, что они не пропустили крайние
                                    сроки подачи налоговой декларации. Одно из самых больших заблуждений
                                    заключается в том, что бизнесу нужно вести бухгалтерские книги только
                                    для уплаты налогов. Фактически, умение читать свою финансовую отчетность
                                    может привести вас к более процветающей и прибыльной компании.
                                </p>
                                <p>
                                    <br />
                                    <br />
                                    Вы хотите сотрудничать с бухгалтером,
                                    который понимает потребности вашего бизнеса,
                                    с кем-то, с кем вы могли бы провести мозговой
                                    штурм и проконсультироваться, поделиться своими
                                    проблемами и успехами. Я могу помочь вам контролировать
                                    свои цифры!
                                    <br />
                                    <br />
                                    Когда я сотрудничаю со своими клиентами, это приносит пользу профессиональным
                                    обязательствам. Я записываю транзакции, провожу встречи для обсуждения
                                    финансовых отчетов, вношу предложения, предоставляя честные отзывы,
                                    придумываю стратегии прибыльности и бюджета и создаю полезную систему
                                    для вашего бизнеса.
                                </p>
                            </div>
                        </div>
                        <div><img className="about-me-ainura" src={Ainura} /></div>
                    </div>
                </>
            )

    }

    return (
        <div className='about-me-main-container'>
            {Filter()}
            <div class="row align-items-center mt-5 mb-5 p-5 steps">
                <div class="col">
                    <Link to="/book" id="none"><img src={Phone} />
                        <br></br>
                        1. Schedule a free consultation</Link>
                </div>
                <div class="col">
                    <Link to="/services" id="none"><img src={Choose} />
                        <br></br>
                        2. Choose a plan</Link>
                </div>
                <div class="col">
                    <img src={Grow} /> <br></br>
                    3. Save and Grow
                </div>
            </div>
            <div className='about-me-main-certifications'>
                <div className='about-me-certifications-main-text' >
                    <h3>Bookkeeper Launch Certificate of Completion.</h3>
                    <p className='about-me-certifications-text'>“The Bookkeeper Launch Certificate of Completion signifies that
                        the earner has learned and demonstrated in-depth understanding of
                        the skills and resources necessary to excel as a 21st Century
                        Bookkeeper and business owner.”
                        <br />
                        <br />
                        Credentials <a href='https://www.credly.com/badges/ecf7c5f3-dc23-4ce1-a607-9bb7aacc1e3d' id="none-black" target="_blank">Bookkeepers.com</a></p>
                </div>
                <div className="about-me-certifications">
                    <img id="certification1" src={Launch} />
                    <img id="certification2" src={Launch2} />
                </div>
            </div>
        </div >
    )
}
