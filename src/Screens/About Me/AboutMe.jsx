import './AboutMe.css'
import City from '../../Assets/9.jpg'
import Ainura from '../../Assets/Ainura.jpeg'
import Phone from '../../Assets/phone.png'
import Choose from '../../Assets/choose2.png'
import Grow from '../../Assets/grow.png'
import Launch from '../../Assets/certicate-1.png'
import Launch2 from '../../Assets/certificate-10.png'

export default function AboutMe() {
    return (
        <div className='about-me-main-container'>
            <div className="about-me-main-img"> <img className="about-me-img" src={City} /></div>
            <div className="about-me">
                <div><img className="about-me-ainura" src={Ainura} /></div>
                <div>
                    <h2>Hi! I'm Amy, your Virtual Bookkeeper!</h2>
                    <div className="about-me-text">
                        <p>
                            <br />
                            <br />I am thrilled that you found my site! I'm Amy, CEO of Go4Profit Bookkeeping
                            Services and the one you'll be working closely with. I've been an entrepreneur
                            my whole life. I work from home Ito provide cloud-based bookkeeping services
                            to help small business to grow and know where their money is going each month.
                            Reliability, trust and accurancy is what I will bring you.
                        </p>
                        <p>
                            <br />
                            <br />
                            “I don’t really enjoy that part of my business, but I will get to it.
                            It’s on my To-Do list.”
                            I've heard that. Many times. But they usually don't.
                            If this is you, then YOU need to be honest with yourself.
                            Are you really going to get to it? Do you struggle
                            (like most business owners) with organizing & understanding your
                            financial records? Do you feel overwhelmed, stressed, & unsure of
                            what to do or how to do it when it comes to keeping books? We take
                            care of the books, help you create a system where all your receipts
                            & paperwork are organized, and we walk you through your financial
                            so you have an understanding each month of how your business is doing.
                            No more guessing. This creates peace of mind (or lights a fire under you
                            if you're not where you want to be).
                        </p>
                    </div>
                </div>
            </div>
            <div className='about-me-main-steps'>
                <div><img src={Phone} /> <h2>1. Schedule a free consultation</h2></div>
                <div><img src={Choose} /> <h2>2. Choose a plan</h2></div>
                <div><img src={Grow} /> <h2>3. Save and Grow </h2></div>
            </div>
            <div className='about-me-main-certifications'>
                <div className='about-me-certifications-main-text' >
                    <h1>Bookkeeper Launch Certificate of Completion.</h1>
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
        </div>
    )
}