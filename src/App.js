import React from 'react';
// import Card from './Card';
import SearchBox from './SearchBox' 
import CardList from './CardList'
import {robots} from './Robots'





const App = () => {
    return(
        <div className ='tc'>
        <h1>RobotArmy</h1>
        <SearchBox/>

       <CardList robots={robots}/>
       </div>
    )

}


export default App;