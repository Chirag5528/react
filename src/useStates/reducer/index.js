import React from 'react';
import person from '../../data/person';
// import Modal from './Modal';

const Index = () => {

    const [name,setName] = React.useState( '' );
    const [people,setPeople] = React.useState( person );
    const [showModal,setShowModal] = React.useState( false );

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( name ){
            setPeople( [...people, { id:new Date().getTime().toString(),name } ] );
            // setPeople( { id:2, name } );
            // setPeople( [ ...people, { id:6,name} ] );
            setShowModal(true);
            setName("");
        }else{
            setShowModal(true);
        }

    }

    return (
        <React.Fragment>
            {/* {showModal && <Modal person={people}/> } */}
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
                />
                <button className="btn" type="submit">Add Name</button>
            </form>
            { showModal && console.log( people ) }
            {/* {showModal && people[3].name} */}


        </React.Fragment>
    )

};

export default Index;