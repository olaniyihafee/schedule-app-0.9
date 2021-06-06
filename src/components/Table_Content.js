
import './styles/Table_Content.css';
import '../screens/styles/Common.css';

import { Link } from 'react-router-dom';

function Table_Content() {
  return (
    <div className="Table-Entire-Container"> 

      <div className="Table-Left-Container">
        
          <div className="Tasks-Headings-Container">
            <ul>
              <li className="Tasks">Task name</li>
              <li className="Start">Start</li>
              <li className="Due">Due</li>
              <li className="Days">Days</li>
              <li className="Percentage">%</li>
            </ul>
          </div>

                <div className="">
                  <ul>
                    <icon> </icon>
                      <li><a><div className="Table-Content"></div></a></li>  
                      <hr className="Horizontal-Line"></hr>            
                  </ul>
                </div> 

                      <div className="Table-Left-Container">
                        <ul>
                            <li><a><div className="Table-Content"></div></a></li> 
                            <hr className="Horizontal-Line"></hr>             
                        </ul>
                      </div> 

      </div>  


      <div className="Table-Right-Container">
        
        <div className="Weeks-Headings-Container">
          <span>particular date</span>
          <ul>
            <li>M</li>
            <li>T</li>
            <li>W</li>
            <li>T</li>
            <li>F</li>
            <li>S</li>
            <li>S</li>
          </ul>
        </div>

              <div className="">
                  <ul>
                      <li>
                        <a>
                          <div className="Table-Content-Test">
                            <div>
                              
                            </div>
                          </div>
                        </a>
                      </li>            
                  </ul>
                </div>  

                      <div className="">
                        <ul>
                            <li>
                              <a>
                                <div className="Table-Content-Test">
                                  <div>
                                    
                                  </div>
                                </div>
                              </a>
                            </li>            
                        </ul>
                      </div>  

      </div> 

  </div>
  );
}

export default Table_Content;
