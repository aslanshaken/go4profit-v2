import './Book.css'
import City from '../../Assets/nyc-book.jpg'
import React from 'react';

export default function Book() {
    return (
        <div className="book-main-container">
            <div className="book-main-img"> <img className="book-img" src={City} /></div>
            <p id='book'>Book a free call today</p>
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