import React from 'react';
// import ReactDOM from 'react-dom';

//Styles
import "./css/App.css";

//Components
// import Header from "./Header";
// import Body from "./Body";
// import Footer from "./Footer";
// import StateArray from './useStates/useStateArray';
// import StateCounter from './useStates/useStateCounter';
// import GithubUsers from './useStates/GithubUsers';
// import GithubUser from './useStates/GithubUser';
// import ShortCircuit from './useStates/ShortCircuit';
// import Form from './useStates/Form';
import Setup from './useStates/reducer';

const App = () => {

    return( 

            <div className="container">
                <Setup />
            </div>  
     )


};
export default App;