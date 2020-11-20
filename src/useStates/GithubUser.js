import React from 'react';
import GithubUsers from './GithubUsers';
const url = "https://api.github.com/users/Defunkt";

const GithubUser = () => {
    
    const [loading, setLoading] = React.useState( true );
    const [errors, setErrors] = React.useState( false );
    const [login, setLogin] = React.useState();
    const [user, setUser] = React.useState("Default User");

    React.useEffect(() => {  
        fetch( url )
        .then( (resp) => {
            
            if( resp.status >= 200 && resp.status <=299 ){
                return resp.json();
            }else{
                setLoading(false);
                setErrors(true);
                throw new Error(resp.statusText);
            }
        })
        .then( user => 
            {
                const { login }  = user;
                setLogin( true );
                setUser( login );
                setLoading( false );
            }
         )
        .catch( ( error ) => setErrors( true ) )
    },[]);
    
    if( errors ){
        return( 
            <h2>An error occured</h2>
        )
    }

    if( loading ){
        return (
            <h2>Loading....</h2>
        )
    }
    if( user ){
        return(
            
            <React.Fragment>
                <h2>{user}</h2>
            </React.Fragment>
            
        )
    }
}

export default GithubUser;