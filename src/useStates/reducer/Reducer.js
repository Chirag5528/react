export const Reducer = ( state, action ) => {
    
    if( action.type === "addItem" ){

        const newPerson = [...state.people, action.payload ]

        return {
            ...state,
            people:newPerson,
            showModal: true,
            modalContent: "Item Added",
            nameValue:""
        }
        

    }
    if( action.type === "setNewName" ){
        
        return {
            ...state,nameValue:action.payload
        }
        // let newList = state.person.filter( (person) =>  person.id !== id );    

        
    }

    throw new Error("No matching options")    
    console.log( state, action );
};
