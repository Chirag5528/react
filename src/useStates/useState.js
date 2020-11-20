import React, {useState} from 'react';

const ErrorExample = () => {
    
    
    const [title,setTitle] = useState('Hello World');

    const changeText = () => {
        // title = "Hello World\n";
        ( title === "Hello World" ) ? setTitle("Random Title") : setTitle("Hello World");
        // console.log( title );
    };    

    return(
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={changeText}>Change Text</button>
        </React.Fragment>
    )
};
export default ErrorExample;