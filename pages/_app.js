
import React from 'react'
import "@/styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default App;