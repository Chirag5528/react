import React from 'react';

const StateCounter = () => {

    const [value,setValue] = React.useState(1);
    
    const increase = () => {
        setTimeout( () => {
        
        setValue( (prevState) => {
            return prevState + 1;
        });

        }, 0 );
    };

    const decrease = () => {
        
        setValue( (value) => {
            if(value > 0)
                return value - 1;
            else
                return value;    
        });
    };

    const reset = () => {
        setValue(0);
    };

    return(
        <React.Fragment>
            <section style={{ margin : "4rem 0" }}>
                <h2>Use State Counter Example</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={ () => decrease() }>Decrement</button>
                <button className="btn" onClick={ () => reset() }>Reset</button>
                <button className="btn" onClick={ () => increase() }>Increment</button>
            </section>
        </React.Fragment>
    )

}
export default StateCounter;