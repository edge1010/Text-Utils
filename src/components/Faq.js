import React from 'react'

// import "../App.css"

export default function Faq(props) {
    return (
        <>
            <div className="accordion accordion-flush faqRadius" id="accordionFlushExample" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h5>{props.heading}</h5>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What can this website do?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body">This is a simple text utility application. Use it to play around with your text by converting it to upper case, lower case, camel case, reversing the sentence, or even removing space between words. 
                        <br /><br />You can also use the "Generate Random Quotes" feature to generate a new quote for yourself and feel inspired.</div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Do you collect data?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The text you enter is kept only to you, safe. This application does not collect any data, AT ALL.</div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Do you use cookies?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We don't have cookies🍪 for you. Please get one for yourself.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
