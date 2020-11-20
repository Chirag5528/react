import React from 'react';

const Modal = (props) => {
    // console.log( props );
    const person = props.person;

    return(
        <React.Fragment>
            {
                person.map( (per) => {
                    const {id,name} = per;
                    return (
                        <h4 key={id}>{name}</h4>
                    )
                } )
            }
        </React.Fragment>
    )

}

export default Modal;