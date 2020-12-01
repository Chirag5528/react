import React from 'react';
import Modal from './Modal';
// import { Reducer } from './Reducer';
const Reducer = ( state, action ) => {
    //Adding new item
    if( action.type === "addItem" ){
        
        return {
                ...state,
                people:[...state.people, action.payload ],
                showModal:true,
                modalContent:"New Item Added"
        };
    }

    // For Removing a particular item

    if( action.type === "removeItem"  ){
        
        
        const newPeople = state.people.filter( ( p ) => p.id != action.payload );        
        return {
            ...state,
            people: newPeople,
            showModal:true,
            modalContent: "Record Deleted Successfully"
        }

    }

    if( action.type === "noValue" ){
        return {
            ...state,
            showModal:true,
            modalContent: "Please select a value"
        }
    }

    throw new Error('no matching action type');
}

const handleDefault = {
    people: [],
    showModal:false,
    modalContent:"",
    nameValue:""
}

const Index = () => {

    const [name,setName] = React.useState( '' );
    const [people,setPeople] = React.useState( [] );
    const [showModal,setShowModal] = React.useState( false );
    const [error, setError] = React.useState(false);
    const nameRef = React.useRef(null);
    
    
    const [state, dispatch] = React.useReducer( Reducer, handleDefault );
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if( name ){

            dispatch( { type:"addItem",payload:{ id:new Date().getTime().toString(),name } } );
            setName("");
            nameRef.current.focus();
            
        }else{
            
            dispatch( { type:"noValue" } );

            setError(true);
            
            nameRef.current.focus();
            
            setShowModal(false);
        }
    }
    const changeName = (value) => {
        setName(value);
        // dispatch( { type:"setNewName", payload:{ value } } )
    }

    const removeItem = ( id ) => {
        
        dispatch( {type:'removeItem',payload:id} );
        setError(true);
    }

    return (
        <React.Fragment>
            { error && <h2>{state.modalContent}</h2> }
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
                onChange = { (e) => changeName(e.target.value)  }
                ref={nameRef}
                />
                <button className="btn" type="submit">Add Name</button>
            </form>
            {state.showModal && <Modal person={state.people} setPerson={state.setPeople} removeItem = { removeItem } />  }
        </React.Fragment>
    )

};

export default Index;