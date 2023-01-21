import React, { useState } from 'react'



// export default function TextForm(props) {
//     const handleUpClick1 = () => {
//         console.log("Uppercase was clicked" + text);
//         let newtext = text.toUpperCase();
//         setText(newtext);
//         // setText("you have clicked on handle up click");
//     }
//     const handleUpClick2 = () => {
//         console.log("Uppercase was clicked" + text);
//         let newtext = text.toLowerCase();
//         setText(newtext);
//         // setText("you have clicked on handle up click");
//     }
//     const handleOnChange = (event) => {
//         console.log("On change");
//         setText(event.target.value);
//     }
//     const [text, setText] = useState('');
//     return (
//         <>
//             <div classNameName='container'>
//                 <h1>{props.heading}</h1>
//                 <div classNameName="mb-3">
//                     <textarea classNameName="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
//                 </div>
//                 <button type="button" classNameName="btn btn-primary mx-2" onClick={handleUpClick1}>Convert to uppercases</button>
//                 <button type="button" classNameName="btn btn-primary" onClick={handleUpClick2}>Convert to lowercases</button>
//                 <div classNameName="container my-3">
//                     <h1>your text summary</h1>
//                     <h4>{text.split(' ').length} words and {text.length} characters</h4>
//                     <h4>{0.008 * text.split(' ').length} Minutes read</h4>
//                 </div>
//                 <h2>preview</h2>
//                 <p>{text}</p>
//             </div>
//         </>
//     )
// }




export default function TextForm(props) {

    const handleUpClick1 = () => {
        let newtext = text.toUpperCase();
        setText(newtext);

    }
    const handleUpClick2 = () => {

        let newtext = text.toLowerCase();
        setText(newtext);

    }
    const handleUpClick3 = () => {
        setText("");
    };
    const handleUpClick4 = () => {
        let newtext = text.split(" ");
        let newcapital = '';

        for (let i = 0; i < newtext.length; i++) {

            newcapital += newtext[i][0].toUpperCase();
            for (let j = 1; j < newtext[i].length; j++) {
                newcapital += newtext[i][j].toLowerCase();
            }
            newcapital += " ";

        }
        setText(newcapital);
    };

    const handleUpClick5 = () => {
        navigator.clipboard.writeText(text);
    };

    // const handleUpClick6 = () => {
    //     let newt = text.split(" ");
    //     let appt = '';
    //     for (let i = 0; i < newt.length; i++) {
    //         if (newt[i][newt[i].length - 1] === ' ') {
    //             for (let j = 1; j < newt[i].length; j++) {
    //                 appt += newt[i][j];
    //             }
    //             appt += ' ';
    //         }
    //         if (newt[i][newt[i].length - 1] !== ' ') {
    //             appt += newt[i];
    //             appt += ' ';
    //         }
    //     }
    //     setText(appt);
    // };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');


    return (
        <>
            <div>
                <div className="mb-3 my-3">
                    <h1>{props.title}</h1>
                    <textarea className="form-control stringCopied" id="mybox" rows="8" value={text} onChange={handleOnChange} />
                </div>
                <button className="btn btn-primary mx-2 my-5" onClick={handleUpClick2}>Convert To Lowercase</button>
                <button className="btn btn-primary " onClick={handleUpClick1}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleUpClick3}>Clear Text area</button>
                <button className="btn btn-primary " onClick={handleUpClick4}>Capitalize</button>
                <button className="btn btn-primary mx-2" onClick={handleUpClick5}>Copy</button>
                {/* <button className="btn btn-primary " onClick={handleUpClick6}>Remove Extra Space</button> */}

            </div>
            <div className='my-4'>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes read</p>
                <h4>preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}



// if (newt[i][newt[i].length - 1] === ' ') {
//     for (let j = 1; j < newt[i].length; j++) {
//         appt += newt[i][j];
//     }
// }

//
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum magnam maiores doloremque earum, rerum numquam, aut dolor unde omnis libero incidunt ducimus molestiae itaque, asperiores explicabo at dolore nobis?