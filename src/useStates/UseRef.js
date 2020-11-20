import React from "react";

const UseRef = () => {

    const nameRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( nameRef.current.value );
        console.log( emailRef.current );
    }

    React.useEffect( () => {
        nameRef.current.focus();
    })

    return(
        <React.Fragment>
            <article>
            <h2>Use Ref example</h2>
            <form action="" className="form" onSubmit={ handleSubmit} >
                <div className="form-control">
                    <label htmlFor="userName">Enter Name</label>
                    <input 
                    type="text"
                    id="userName"
                    className='form-control'
                    ref={nameRef}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="userEmail">Enter Email</label>
                    <input 
                    type="text"
                    className='form-control'
                    id="userEmail"
                    ref={emailRef}
                    />
                </div>
                <button 
                type="submit" 
                className="btn">Submit</button>
            </form>
            </article>
        </React.Fragment>
    )

}
export default UseRef;