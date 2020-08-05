
import React from 'react'
import "@/styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import 'slate-simple-editor/dist/index.css';

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default App;