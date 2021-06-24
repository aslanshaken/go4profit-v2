import './AboutMe.css'
import City from '../../Assets/9.jpg'
import Ainura from '../../Assets/Ainura.jpeg'

export default function AboutMe() {
    return (
        <div className='about-me-main-container'>
            <div className="about-me-main-img"> <img className="about-me-img" src={City} /></div>
            {/* <h1>About Me</h1> */}
            <div className="about-me">
                <div><img className="about-me-ainura" src={Ainura} /></div>
                <div>
                    <h2>Hi! I'm Amy, your Virtual Bookkeeper!</h2>
                    <div className="about-me-text">
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
                        <p>
                            <br />
                            <br />I am thrilled that you found my site! I'm Amy, CEO of Go4Profit Bookkeeping
                            Services and the one you'll be working closely with. I've been an entrepreneur
                            my whole life. I work from home Ito provide cloud-based bookkeeping services
                            to help small business to grow and know where their money is going each month.
                            Reliability, trust and accurancy is what I will bring you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}