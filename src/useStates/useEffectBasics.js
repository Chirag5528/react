import React from 'react';

const UseEffectBasics = () => {

    const [value,setValue] = React.useState(2);
    const [windowWidth,setWindowWidth] = React.useState(window.innerWidth);
    const [windowHeight,setWindowHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        // console.log("THIS USEEFFECT VALUE CHANGED");
        document.title = `Times Two ${value}`;
    },[value]);

    const changeWindowSize = () => {
        setWindowWidth( window.innerWidth );
        setWindowHeight( window.innerHeight );
    }

    React.useEffect( () => {
       console.log( "ADDED" );
       window.addEventListener('resize',changeWindowSize);
       return () => {
           console.log('REMOVED');
           window.removeEventListener('resize',changeWindowSize);
       }
    });
    return( 
        <React.Fragment>
            <h2>{value}</h2>
            <h2>{ `${windowWidth}x${windowHeight}` }</h2>
            <button type='button' className="btn" onClick={() => { setValue( (value) => {return value * 2;}); }}>Click Me</button>
        </React.Fragment>
     )


}
export default UseEffectBasics;