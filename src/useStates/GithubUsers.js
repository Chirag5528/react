import React from 'react';
const url = "https://api.github.com/users";
const GithubUsers = () => {

    const [users, setUsers] = React.useState( [] );
    
    const getGitUsers = async() => {
        const response = await fetch( url );
        const result = await response.json();
        setUsers( result );
    }

    React.useEffect( () => {
        getGitUsers();
    },[] )


    return (
        <React.Fragment>
           <ul className="users">
            { 
                users.map( ( user ) => {
                    const { id,login,html_url,avatar_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}/>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                            
                        </li>    
                    )
                })
            }
           </ul>
        </React.Fragment>
    )
}
export default GithubUsers;