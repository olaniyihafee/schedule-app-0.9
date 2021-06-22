
import './styles/Common.css';
import './styles/Each_Project_Division.css';
import Table_Content from '../components/Table_Content';

import { Link } from 'react-router-dom';

function Each_Project_Division() {
  return (
    <div className="Entire-Body">

      <div className="Heading-Container">
        <div>
          <Link to="/">
            <icon/>
            <header className="h1">
              Projects
            </header>
          </Link>          
        </div> 

        <div className="Subtittles-Container">
        
          <div className="Project-Tittle-Add-Task-Container">
            <header className="h2">
              Project Tittle
            </header>
            <div className="Float-Right">
              <icon/>
              <button className="Button Button-Blue">
                Task
              </button>            
            </div>
          </div>        
  
          <div className="Small-Container Float-Right">
            <Link to="/Settings">
              <icon/>  
              <button className="Button Button-Normal">
                Settings
              </button> 
            </Link>                  
          </div> 
            
        </div>
 

        <hr className="Horizontal-Line"></hr>

      </div>

      <div><Table_Content/></div>

  </div>
  );
}

export default Each_Project_Division;
