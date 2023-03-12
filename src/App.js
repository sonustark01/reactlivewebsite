import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useState } from 'react';

const App = () => {
    let [mode, setmode] = useState('light');

    const toggledark = () => {
        if (mode === 'light') {
            setmode('dark');
            document.body.style.color = '#ffffff';
            document.body.style.backgroundColor = '#000000';
        } else {
            setmode('light');
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
        }
    }

    return (
        <>
            <Navbar title='TextUtilis' mode={mode} onclick={toggledark} />
            <Routes>
                <Route path='/' element={<Home mode={mode} />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </>
    )
}

export default App