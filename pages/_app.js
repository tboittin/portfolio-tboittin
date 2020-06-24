
import React from 'react'
import "@/styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default App;