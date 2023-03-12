import React from 'react'
import { useState } from 'react'

const Textform = (props) => {
    let [text, settext] = useState('');
    let [past, setpast] = useState('');
    const changehandler = (e) => {
        // e.preventdefault;
        settext(e.target.value);
        console.log(text);
    }

    const converttoupper = () => {
        let data = text;
        data = data.toUpperCase();
        settext(data);
    }

    const converttolower = () => {
        settext(text.toLowerCase());
    };

    const sampledata = () => {
        let data = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quos veritatis ipsum nihil? Dolorem, omnis et. Odio voluptatem harum laudantium. Aliquam quisquam dolore veniam repellendus doloribus culpa sit consequuntur labore sint repudiandae suscipit nesciunt ex quaerat vero recusandae, nisi, voluptatem officia dignissimos quae? Perspiciatis repudiandae recusandae iste. Impedit, nisi consectetur?";
        settext(data);
    };

    const cleararea = () => {
        setpast(text);
        settext("");
    };

    const capitalize = () => {
        let data = text.split(" ");
        let finaldata = "";
        for (let i = 0; i < data.length; i++) {
            finaldata += data[i][0].toUpperCase();
            for (let j = 1; j < data[i].length; j++) {
                finaldata += data[i][j];
            }
            finaldata += ' ';
        }
        settext(finaldata);
    };

    const removespace = () => {
        let data = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                if (text[i + 1] === ' ') {
                    continue;
                }
            }
            data += text[i];
        }
        settext(data);
    }

    const previoustext = () => {
        settext(past);
    };

    return (
        <>
            <div className="box" style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <textarea name="inputtext" id="inputtext" onChange={changehandler} value={text} cols="150" rows="10" style={{ boxShadow: `5px 5px 5px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}`, borderRadius: '20px', padding: '20px' }}></textarea>
            </div>

            <div className="controlbox" style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <div className="box" style={{ width: '60%', height: '80px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={cleararea} style={{ boxShadow: `2px 2px 2px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }}>Clear Area</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={converttoupper} style={{ boxShadow: `2px 2px 2px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }}>Convert To Uppercase</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={converttolower} style={{ boxShadow: `2px 2px 2px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }}>Convert To Lowercase</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={sampledata} style={{ boxShadow: `2px 2px 2px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }}>Sample Data</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={capitalize} style={{ boxShadow: `2px 2px 2px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }}>Capitalize</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={removespace} style={{ boxShadow: `2px 2px 2px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }}>Remove Extra Space</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={previoustext} style={{ boxShadow: `2px 2px 2px 1px ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }}>Previous Text</button>
                </div>
            </div>
        </>
    )
}

export default Textform