import React from 'react';

const Modal = ({ person,setPerson }) => {
    // console.log( person );
    const removeThisItem = (id) => {
        
        let newList = person.filter( (person) =>  person.id !== id );
        setPerson( newList );
    }

    return(
        <React.Fragment>
            {
                <ul className="bg-light">
                {
                    person.map( (per) => {
                        const {id,name} = per;
                        return (
                            <li key={id} className="item">
                                    <p key={id}>{name}</p>
                                    <button className="btn" onClick={ () => removeThisItem( id ) }>Remove</button>
                            </li>
                        )
                    } )
                }
                </ul>        
            }
        </React.Fragment>
    )

}

export default Modal;