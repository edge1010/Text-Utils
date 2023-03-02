import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Quote(props) {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const getQuote = () => {
        fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote.content);
                    setAuthor(quote.author);
                    console.log(quote);
                }
            )
    }
    
    useEffect(() => {
        getQuote();
    }, []);



    return (
        <div className='d-flex flex-column my-2 mx-auto'>
            {/* {getQuote} */}

            {/* {getQuote()} */}
            <div className="back bg my-2" >
                <div className="text">
                    {quote}
                    <div className="auth">
                        -{author}-
                    </div>

                </div>
                <hr />
            </div>
            <button className='btn btn-success  mx-auto mb-5 w-35' onClick={getQuote}>Get New Quote</button>
        </div>
    )

}
