
import React from 'react'
import "@/styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({Component, pageProps}) => {
    console.log(process.env.AUTH0_DOMAIN);
    return <Component {...pageProps}/>
}

export default App;