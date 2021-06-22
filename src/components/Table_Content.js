
import './styles/Table_Content.css';
import '../screens/styles/Common.css';
import { getProjects } from '../otherFunctions/api'

import Progress_bar from '../components/Progress_bar'

import { Link } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { useEffect, useState } from 'react'

function Table_Content() {

  const [ expanded, setExpanded ] = useState([false, false])
  const [ minDate, setminDate ] = useState()
  const [ maxDate, setmaxDate ] = useState()
  const [ test, setTest ] = useState([])

  var all_dates = []  
  var minimumdate;

  function min_date(all_dates) {
    var min_dt = all_dates[0],
     min_dtObj = new Date(all_dates[0]);
     
    console.log('on instant minimum date: '+min_dt)
    all_dates.forEach(function(dt, index)
     {
      if ( new Date( dt ) < min_dtObj)
      {
        min_dt = dt;
        min_dtObj = new Date(dt);
      }
     });

     //setminDate(min_dt) 
    console.log('minimum date:' + min_dt)
    minimumdate = min_dt
  }

  function max_date(all_dates) {
      var max_dt = all_dates[0],
       max_dtObj = new Date(all_dates[0]);
      all_dates.forEach(function(dt, index)
       {
        if ( new Date( dt ) > max_dtObj)
        {
          max_dt = dt;
          max_dtObj = new Date(dt);
        }
       });

       //setmaxDate(max_dt) 
      console.log('maximum date:' + max_dt)
  }

  function increment_date_array(startdate, enddate){
    all_dates.push(startdate)
    all_dates.push(enddate)
    //console.log('it entered this function')

    min_date(all_dates)
    max_date(all_dates)
  }

  useEffect( async () => {

    await getProjects().then( data => {
       console.log(data)       
       localStorage.setItem('my-test', JSON.stringify(data));
       console.log(data.projects[0].tastks)
       var data2 = data.projects[0].tastks
       var data3 = [...data2]
       setTest(test => [].concat(...data2))
       console.log(test) 
       test.forEach((x,i)=>{
         if(x.startdate){
          all_dates.push(x.startdate)
            x.subtastks.forEach((y,i)=>{
              if(y.startdate){
                all_dates.push(y.startdate)

                
              }
            })
         }
       })

       min_date(all_dates)
       setminDate(minimumdate)
     })
     .catch(err => {console.log(err);}); 
      
     //findFarthestAndNearestTime()

     //console.log(min_date(['01/27/2015', '02/02/2015', '03/01/2015']));
     //console.log(max_date(['01/27/2015', '02/02/2015', '03/01/2015']));

      /* var data = localStorage.getItem('my-test')
      var data2 = JSON.parse(data)
      var data3 = data2.projects
      //setTest(JSON.parse(data))
      //console.log(JSON.parse(data));
      var data4 = data3[0].tastks[0];

      setTest(data.projects[0]) */
      //console.log(test);
      //console.log(data4)
  }, []) 


  const  handleExpansion = () =>{
    
    /* if (trial[0]  === false )
    {setExpanded(true)} */
    console.log(expanded[0])
    console.log(expanded[1])

    if ((expanded[0] || expanded[1]) == false )
    {
      alert('it entered this function')
      /* console.log(expanded[0])
      console.log(expanded[1]) */
      setExpanded([true ,true])
      /* console.log(expanded[0])
      console.log(expanded[1]) */
    }

    else if ((expanded[0] || expanded[1]) == true ){
      alert('then it entered this function')
      setExpanded([false, false])
    }
    
  }


  const taskStartDateArray = []
  const taskEndDateArray = [] 
  

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
                          <div className="Table-Content">
                           {                            
                            test.map((jumong) => (
                            <Accordion>
                              <AccordionItem 
                                dangerouslySetExpanded={expanded[0]} 
                                onClick={()=>handleExpansion()}  
                                key={jumong.taskname}>
                                  <AccordionItemHeading>
                                      <AccordionItemButton>
                                        <div className="Tasks-Headings-Container">                                        
                                          <ul>
                                          <icon> </icon>
                                            <li className="Tasks">{jumong.taskname}</li>
                                            <li className="Start">{jumong.startdate}</li>
                                            <li className="Due">{jumong.enddate}</li>
                                            <li className="Days">Days</li>
                                            <li className="Percentage">%</li>
                                          </ul>
                                        </div>
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <div className="Tasks-Headings-Container">
                                    {
                                    jumong.subtastks.map((boy) => (
                                      <ul key={boy.subtaskname}>
                                        <li className="Tasks">{boy.subtaskname}</li>
                                        <li className="Start">{boy.startdate}</li>
                                        <li className="Due">{boy.enddate}</li>
                                        <li className="Days">Days</li>
                                        <li className="Percentage">%</li>
                                      </ul>
                                      ))
                                    }
                                    </div>
                                  </AccordionItemPanel>
                              </AccordionItem>
                            </Accordion>

                            ))
                          }  

                        {/*     <Accordion>
                              <AccordionItem 
                                uuid={1} 
                                dangerouslySetExpanded={expanded[0]} 
                                onClick={()=>handleExpansion()}>
                                  <AccordionItemHeading>
                                      <AccordionItemButton>
                                          What harsh truths do you prefer to ignore?
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                      <p>
                                          Exercitation in fugiat est ut ad ea cupidatat ut in
                                          cupidatat occaecat ut occaecat consequat est minim minim
                                          esse tempor laborum consequat esse adipisicing eu
                                          reprehenderit enim.
                                      </p>
                                  </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                  <AccordionItemHeading>
                                      <AccordionItemButton>
                                          Is free will real or just an illusion?
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                      <p>
                                          In ad velit in ex nostrud dolore cupidatat consectetur
                                          ea in ut nostrud velit in irure cillum tempor laboris
                                          sed adipisicing eu esse duis nulla non.
                                      </p>
                                  </AccordionItemPanel>
                              </AccordionItem>

                              <AccordionItem
                                uuid={1} 
                                dangerouslySetExpanded={expanded[1]} 
                                onClick={()=>handleExpansion()}>
                                  <AccordionItemHeading>
                                      <AccordionItemButton>
                                          We all prefer to ignore the harshest truths of all
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                      <p>
                                          Exercitation in fugiat est ut ad ea cupidatat ut in
                                          cupidatat occaecat ut occaecat consequat est minim minim
                                          esse tempor laborum consequat esse adipisicing eu
                                          reprehenderit enim.
                                      </p>
                                  </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem></AccordionItem>
                          </Accordion> */}
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
              {                            
                test.map((jumong) => (
                <Accordion>
                  <AccordionItem 
                    dangerouslySetExpanded={expanded[0]} 
                    onClick={()=>handleExpansion()}  
                    key={jumong.taskname}>
                      <AccordionItemHeading>
                        <AccordionItemButton>                          
                          {increment_date_array(jumong.startdate, jumong.enddate)}
                          <Progress_bar minimumdate={minDate} start={jumong.startdate} end={jumong.enddate} />

                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      {
                        jumong.subtastks.map((boy) => (

                          <div className="">                            
                            {increment_date_array(boy.startdate, boy.enddate)}
                            <Progress_bar mindate={minDate} start={boy.startdate} end={boy.enddate} />
                          </div>  
                        
                        ))
                      }
                      </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                ))
              } 
      </div> 

  </div>
  </div>
  );
}

export default Table_Content;
