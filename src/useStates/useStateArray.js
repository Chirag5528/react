import React from 'react';
import person from '../data/person';

const StateArray = () => {
    let lastId = 1;
    const [people, setPeople] = React.useState(person);
    const [peopleLastId, setPeopleLastId] = React.useState(lastId);

    const removeItem = (id) => {
        const newPeople = people.filter( (person) =>  person.id !== id  );
        setPeopleLastId( () => {
            return lastId - 1;
        });
        setPeople( newPeople );
    };

    const addPeople = ( obj ) => {
        // const idPeople = peopleId;
        setPeopleLastId( () => {
          return lastId;
        });
        setPeople( [ ...people, obj ] );
        // setPeopleId( idPeople + 1 );
        
    }

    return(
        <React.Fragment>
            <h2>Use State Array Example</h2>
            <button className="btn">Show</button>
            <button className="btn" id={peopleLastId} onClick= {() => addPeople( { id:(peopleLastId + lastId),name:`Chirag${peopleLastId + lastId}` } )}>Insert</button>
            <button className="btn" onClick={ () => setPeople([]) }>Clear</button>
            { 
                people.map( (p) => {
                    lastId++;
                    const {id,name} = p;
                    return (
                        <div className="item" key={id}>
                            <h4>{name}</h4>
                            <button className="btn" onClick={ () => removeItem(id) }> Remove {name}</button>
                        </div>
                    )
                })            
            }
        </React.Fragment>
    )
};

export default StateArray;