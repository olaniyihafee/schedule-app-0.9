import './styles/All_Projects.css';
import './styles/Common.css';
import { getProjects } from '../otherFunctions/api'
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../components/Pop_up'

function All_Projects() {

  const [ test, setTest ] = useState()

  /* useEffect( async () => {

    getProjects().then( data => {
       console.log(data)       
       localStorage.setItem('my-test', JSON.stringify(response));
     })
     .catch(err => {console.log(err);}); 
      
      
      var data = localStorage.getItem('my-test')
      var data2 = JSON.parse(data)
      var data3 = data2.projects
      //setTest(JSON.parse(data))
      //console.log(JSON.parse(data));
      var data4 = data3[0].tastks[0];

      setTest(data)
      //console.log(test);
      //console.log(data4)
  }, []) 
 */
  
  const [ seen, setSeen ] = useState(false)

   const togglePop = () => {
     console.log(seen)
    setSeen(!seen)
   };
     

   const popupSubmission = (List) => {
    console.log(List)
   /* setSeen(!seen)
   console.log(seen) */
  };
  return (

    
    
    <div className="Entire-Body">
        
        {/*the code for the popup apperance next*/}
        {seen ? <PopUp toggle={togglePop} handleSubmit={popupSubmission}/> : null}

      <div className="Each-Project-Tittle"><p>{test}</p></div>
      <div className="Heading-Container">
          <header className="h1">
            Projects
          </header>


        {/* <div>
            {
              list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar source={{uri: l.avatar_url}} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }</div> */}


        <div className="Float-Right">
          <button value ="New Projects" className="Button Button-Blue" onClick={togglePop}>
            New Projects
          </button>          
          <div className="Float-Right">
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

      <div className="Project-Tittles-Container">
        
          <ul>
              <li><Link to="/Each_Project_Division"><div className="Each-Project-Tittle"></div></Link></li>
              <li><Link to="/Each_Project_Division"><div className="Each-Project-Tittle"></div></Link></li>
              <li><Link to="/Each_Project_Division"><div className="Each-Project-Tittle"></div></Link></li>
          </ul>
      </div>     

    </div>
  );
}

export default All_Projects;
