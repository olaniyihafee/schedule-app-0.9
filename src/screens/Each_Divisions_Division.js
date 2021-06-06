
import './styles/Each_Divisions_Division.css';
import './styles/Common.css';

import { Link } from 'react-router-dom';

function Each_Division_Division() {
  return (
    <div className="Entire-Body">
    

      <div className="Heading-Container">
        <div>
          <icon/>
          <header className="h1">
            Specific Projects
          </header>
        </div> 

        <div className="Subtittles-Container">
        
          <div className="Project-Tittle-Add-Task-Container">
            <header className="h2">
              The Specific Tasks
            </header>
            <div className="Float-Right">
              <icon/>
              <button className="Button Button-Blue">
                Sub-Task
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

      <div className="Table-Entire-Container">

        <div className="Table-Left-Container">
          <ul>
              <li><a><div className="Table-Content"></div></a></li>
              <li><a><div className="Table-Content"></div></a></li>
              <li><a><div className="Table-Content"></div></a></li>
          </ul>
        </div> 

        <div className="Table-Right-Container">
          <ul>
              <li><a><div className="Table-Content-Test"></div></a></li>
              <li><a><div className="Table-Content"></div></a></li>
              <li><a><div className="Table-Content"></div></a></li>
              <li><a><div className="Table-Content-Test"></div></a></li>
              <li><a><div className="Table-Content"></div></a></li>
              <li><a><div className="Table-Content"></div></a></li>
          </ul>
        </div>  
        
      </div>       

  </div>
  );
}

export default Each_Division_Division;
