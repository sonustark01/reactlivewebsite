import React, { useState } from 'react'

const About = () => {
    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px'
    })

    const [btntext, setbtntext] = useState("Enable Dark Mode")

    const togglestyle = () => {
        if (mystyle.color === 'black') {
            setmystyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setbtntext("Enable Light Mode")
        }
        else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark Mode")
        }
    }
    return (
        <div style={mystyle} className='my-10'>
            <div className="accordion " id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                            <h1>About Us</h1>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>

            </div>
            <button type="button" className="btn btn-primary my-2 mx-2" style={mystyle} onClick={togglestyle}>{btntext}</button>
        </div >

    )
}

export default About