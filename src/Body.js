import React from 'react';
// import ReactDOM from 'react-dom';

import Books from "./Books"
import "./css/Body.css"

const Body = () => {
    return(  

        <div className = "app__body">

            <h2>Hey This Is h2 from BODY</h2>
            <p>HEy this is a paragraph from BODY. See even my color is changed.</p>
            <Books />
        </div>

    )
};

export default Body;