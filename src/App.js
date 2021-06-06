
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';

import All_Projects from './screens/All_Projects';
import Each_Project_Division from './screens/Each_Project_Division';
import Each_Divisions_Division from './screens/Each_Divisions_Division';
import Settings from './screens/Settings';
import './App.css';

import { createContext, useEffect, useState, useContext } from 'react'

function App() {
/* 
  const theContext = createContext()
  const [ test, setTest ] = useState([])

  useEffect(() => {
    /* let url ="http://localhost:3000/projects"
      fetch(url,{
        "method": 'GET',
        "headers": {
          "content-type": "application/json"
        },
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        localStorage.setItem('my-test', JSON.stringify(response));
      })
      .catch(err => {console.log(err);}); */
      
      /* var data = localStorage.getItem('my-test')
      var data2 = JSON.parse(data)
      var data3 = data2.projects
      setTest(data3)
      console.log(JSON.parse(data));
      console.log(data2);
  }, []) */ 

  return (    
    <BrowserRouter>       
      <Switch>
      {/* <Route path="/" exact component={Each_Project_Division} /> */}
      {/* <theContext.Consumer> */}
          <Route path="/" exact component={All_Projects} />
        {/* </theContext.Consumer> */}
          <Route path="/Each_Project_Division" exact component={Each_Project_Division} />
          <Route path="/Each_Divisions_Division" exact component={Each_Divisions_Division} />
          <Route path="/Settings" exact component={Settings} />
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
