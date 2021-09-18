import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import socket from './socket.js';

import "./index.css";

export default function App(){
    const [data, setData] = useState("");
    useEffect(() => {
        socket.on("sensors", message => {
            setData(message);
        })
    }, [])
    return (
        <>
            <Header />
            <Main data={data}/>
            <Footer />
        </>
    )
}