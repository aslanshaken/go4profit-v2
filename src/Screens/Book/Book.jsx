import './Book.css'
import City from '../../Assets/nyc-book.jpg'
import React from 'react';

export default function Book(props) {
    const { lang, setLang } = props
    function Filter() {
        if (lang == null || lang == 'eng') {
            return (
                <>
                    <p id='book'>Book a free call today</p>
                </>
            )
        }
        else {
            return (
                <>
                    <p id='book'>Получите бесплатную консультацию сегодня</p>
                </>
            )
        }
    }
    return (
        <div className="book-main-container">
            <div className="book-main-img"> <img className="book-img" src={City} /></div>
            {Filter()}
            <div className="calendly-main">
                <iframe
                    id="calendly"
                    src="https://calendly.com/ainurbookkeeper/30min"
                    width="100%"
                    height="100%"
                    frameborder="0"
                ></iframe>
            </div>
        </div>
    )
}