import React from 'react'
import { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    }

    const [btntext, setBtnText] = useState("Enable dark mode+")

    const toggleStyle = () => {
        if (myStyle.color === '#042743') {
            myStyle({
                color: 'white',
                backgroundColor: '#042743',
                border: '1px solid white'
            })
            setBtnText("Enable light mode")
            props.showAlert("Enabled dark mode!", "success");
        }
        else {
            myStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark mode")
            props.showAlert("Enabled light mode!", "success");
        }
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-2'>About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Used to -
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is used to correct the text.</strong> Such as moving to uppercase, moving to lowercase, removing the extra spaces, clearing, copying, the text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is free to use.</strong> This is free for editing the text. This is free for editing the text! So use it happily.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            The dark mode
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>There are two types of dark mode in this application.</strong>There are two types of dark mode -
                            <strong>1.</strong>'Dark Mode' <spacer/><strong>2.</strong>'Dark mode +' The 'Dark mode' is default dark mode and the 'Dark mode +' is expert dark mode that is in the bottom, So click it the you will see quiet neat Enjoy it
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                {/* <button exact onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btntext}</button> */}
            </div>
        </div>
    )
}
