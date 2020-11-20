import React from 'react';

const ShortCircuit = () => {

    const [title, setTitle] = React.useState("");
    const [error, setError] = React.useState(false);

   /*  const showError = () => {
        if( error ){
            return setError(false);
        }
        return setError(true);
    } */

    return (
        <React.Fragment>
            <h2>{ !title && "Hello World" }</h2>
            <button className="btn" onClick={ () => setError( ! error ) }>Toggle Error</button>
            <h2>{ error ? "Error..." : "No Error" }</h2>
            
        </React.Fragment>

    )


}
export default ShortCircuit;