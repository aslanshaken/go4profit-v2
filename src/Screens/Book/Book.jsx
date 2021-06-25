import './Book.css'
import City from '../../Assets/nyc-book.jpg'

export default function Book(){
    return(
        <div className="book-main-container">
        <div className="book-main-img"> <img className="book-img" src={City} /></div>
        <p id='book'>Book a free call today</p>
        </div>
    )
}