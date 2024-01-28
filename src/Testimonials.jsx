import React, { useState } from "react";

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
            "author": "Rumi"
        },
        {
            "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
            "author": "Abdul Kalam"
        },
        {
            "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
            "author": "Abdul Kalam"
        },
        {
            "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
            "author": "Bill Gates"
        },
        {
            "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
            "author": "Rumi"
        },
        {
            "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
            "author": "Abu Bakr (R.A)"
        },
        {
            "quote": "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
            "author": "Albert Einstein"
        },
        {
            "quote": "O man you are busy working for the world, and the world is busy trying to turn you out.",
            "author": "Abu Bakr (R.A)"
        },
        {
            "quote": "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
            "author": "Abdul Kalam"
        },
        {
            "quote": "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
            "author": "Abraham Lincoln"
        }
    ];

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    return (
        <div className="testimonials">
            <div className="testimonials-quote">{testimonials[currentIndex].quote}</div>
            <div className="testimonials-author">- {testimonials[currentIndex].author}</div>
            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
}

export default Testimonials;