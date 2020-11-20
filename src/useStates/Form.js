import React from 'react';

const Form = () => {

    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [people,setPeople] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( name && email ){
            const person = { id:new Date().getTime().toString() ,name,email}
            
            setPeople( (people) => {
                return [...people, person];
            } );
            setName("");
            setEmail("");
            setPassword("");
            // console.log(people);
        }
    };
    
    const changeName = (value) => {
        setName( value );
    }

    const changeEmail = (value) => {
        setEmail( value );
    }
    const changePassword = (value) => {
        setPassword( value );
    }

    return (

        <React.Fragment>
            <article>
                <form action="" className="form" onSubmit={ handleSubmit }>
                    <div className="form-control">
                        <label 
                            htmlFor="userName">Enter Name: </label>
                        <input 
                        type="text" 
                        name="userName" 
                        id="userName" 
                        onChange = { (e) => { changeName(e.target.value) } }
                        value={name}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="userEmail">Email</label>
                        <input 
                        type="email" 
                        name="userEmail" 
                        id="userEmail"
                        value={email}
                        onChange = { (e) => changeEmail( e.target.value ) }
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="userPassword">Password</label>
                        <input 
                        type="password" 
                        name="userPassword" 
                        id="userPassword"
                        value={password}
                        onChange = { (e) => changePassword( e.target.value ) }
                        />
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
                {
                    people.map( (person) => {
                        const { id,name,email } = person;
                        return (
                            <div className="personList item" key={id}>
                                <h4>{name}</h4>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }
            </article>
        </React.Fragment>

    )

}
export default Form;