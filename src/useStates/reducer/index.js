import React from 'react';
import person from '../../data/person';
import Modal from './Modal';

const Index = () => {

    const [name,setName] = React.useState( '' );
    const [people,setPeople] = React.useState( person );
    const [showModal,setShowModal] = React.useState( false );
    const [error, setError] = React.useState(false);
    const nameRef = React.useRef(null);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if( name ){
            setPeople( [...people, { id:new Date().getTime().toString(),name } ] );
            setError(false);
            setShowModal(true);
            setName("");
            nameRef.current.focus();
        }else{
            setError(true);
            nameRef.current.focus();
            setShowModal(false);
        }

    }

    return (
        <React.Fragment>
            { error && <h2>Name cannot be empty</h2> }
            <form 
            action="" 
            className="form" 
            onSubmit={handleSubmit}
            >
                <input 
                type="text"
                name="userName" 
                className="form-control" 
                value={name}
                onChange = { (e) => setName(e.target.value)  }
                ref={nameRef}
                />
                <button className="btn" type="submit">Add Name</button>
            </form>
            {showModal && <Modal person={people}/> }
        </React.Fragment>
    )

};

export default Index;