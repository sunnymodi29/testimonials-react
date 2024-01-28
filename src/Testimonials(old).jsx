import axios from 'axios';
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [data, setData] = useState([])
    let arr = []

    // Get Testimonials Data
    useEffect(() => {
        axios.get("https://dummyjson.com/quotes")
            .then(res => {
                setData(res.data.quotes);
                arr.push(res.data.quotes[0])
                console.log(arr);   
            }).catch((err) => { console.log(err); })
    }, [])

    


    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + data.length - 1) % data.length);
        arr.push(data[currentIndex])
        console.log(arr);
    }

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % data.length);
        arr.push(data[currentIndex])
        console.log(arr);
    }

    return (
        <div className="testimonials">
            {arr.map(() => {
                return <>
                    <div className="testimonials-quote">{arr.quote}</div>
                    <div className="testimonials-author">- {arr.author}</div>
                </>
})}
            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>


            {/* <div className="testimonials-quote">{data[currentIndex].quote}</div>
            <div className="testimonials-author">- {data[currentIndex].author}</div>
            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div> */}
        </div>
    )
}

export default Testimonials