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
                        <ul className="bg-light">
                            <li key={id}><p className="item"  key={id}>{name}</p></li>
                        </ul>
                        
                    )
                } )
            }
        </React.Fragment>
    )

}

export default Modal;