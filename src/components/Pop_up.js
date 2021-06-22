import './styles/Pop_up.css';

import React, { Component, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';


export default function PopUp (prop) {

    const [inputList, setInputList] = useState([{ taskName: ""}]);
 
    // handle input change
 const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { taskName: "", startDate: "", endDate: "" }]);
  };

  const handleClick = () => {
  };


  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={prop.toggle}>    </span> 

     <div className="each_list_bounding_box">
           <input
             className="input_text"
             name="taskName"
  placeholder="Enter Task Name"
             value=""
             onChange={e => handleInputChange(e)}
           />
           <input
             type="date"
             className="input_date"
             name="startDate"
  placeholder="Start Date"
             value=""
             onChange={e => handleInputChange(e)}
           />
           <input
             type="date"
             className="input_date"
             name="endDate"
  placeholder="End Date"
             value=""
             onChange={e => handleInputChange(e)}
           />

        {/* the accordion for the content in more option */}
           <Accordion>
                <AccordionItem>                         
                    <AccordionItemPanel>
                        <div>
                            <input
                                className="input_text_short"
                                name="days"
                    placeholder="Days"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            <input
                                className="input_text_short"
                                name="hours"
                    placeholder="Hours"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            <input
                                className="input_text_short"
                                name="daysEquivalence"
                    placeholder="Days Equivalence"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                    </div>

                    {/* the list of checkboxes for the days of the week */}
                    <div>
                            s
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="sun"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            m
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="mon"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            t
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="tue"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            w
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="wed"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            th
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="thu"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            f
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="fri"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                            s
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="sat"
                                value=""
                                onChange={e => handleInputChange(e)}
                            />
                    </div>
                                    
                    </AccordionItemPanel>

                    <AccordionItemButton className="float_right">
                        <button className="more_button">more</button>
                    </AccordionItemButton>

                </AccordionItem>
            </Accordion>
            
         </div>
    <hr className="Horizontal-Line"></hr>

 {/* the entire list of each added task or subtask 
  the part that continues to extend as a list*/}
     <div className="App">
     {inputList.map((x, i) => {
       return (
         <div className="each_list_bounding_box">
           <input
             className="input_text"
             name="taskName"
  placeholder="Enter Task Name"
             value={x.firstName}
             onChange={e => handleInputChange(e, i)}
           />
           <input
             type="date"
             className="input_date"
             name="startDate"
  placeholder="Start Date"
             value={x.startDate}
             onChange={e => handleInputChange(e, i)}
           />
           <input
             type="date"
             className="input_date"
             name="endDate"
  placeholder="End Date"
             value={x.endDate}
             onChange={e => handleInputChange(e, i)}
           />

        {/* the accordion for the content in more option */}
           <Accordion>
                <AccordionItem>                         
                    <AccordionItemPanel>
                        <div>
                            <input
                                className="input_text_short"
                                name="days"
                    placeholder="Days"
                                value={x.days}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <input
                                className="input_text_short"
                                name="hours"
                    placeholder="Hours"
                                value={x.hours}
                                onChange={e => handleInputChange(e, i)}
                            />
                            <input
                                className="input_text_short"
                                name="daysEquivalence"
                    placeholder="Days Equivalence"
                                value={x.daysEquivalence}
                                onChange={e => handleInputChange(e, i)}
                            />
                    </div>

                    {/* the list of checkboxes for the days of the week */}
                    <div>
                            s
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="sun"
                                value={x.sunday}
                                onChange={e => handleInputChange(e, i)}
                            />
                            m
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="mon"
                                value={x.monday}
                                onChange={e => handleInputChange(e, i)}
                            />
                            t
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="tue"
                                value={x.tuesday}
                                onChange={e => handleInputChange(e, i)}
                            />
                            w
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="wed"
                                value={x.wednesday}
                                onChange={e => handleInputChange(e, i)}
                            />
                            th
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="thu"
                                value={x.thursday}
                                onChange={e => handleInputChange(e, i)}
                            />
                            f
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="fri"
                                value={x.friday}
                                onChange={e => handleInputChange(e, i)}
                            />
                            s
                            <input
                                type="checkbox"
                                className="date_checkboxes"
                                name="sat"
                                value={x.saturday}
                                onChange={e => handleInputChange(e, i)}
                            />
                    </div>
                                    
                    </AccordionItemPanel>

                    <AccordionItemButton className="float_right">
                        <button className="more_button">more</button>
                    </AccordionItemButton>

                </AccordionItem>
            </Accordion>

            {/* the add or remove new task or subtask buttons */}
           <div className="each_list_buttons">
             {inputList.length !== 1 && <button
               className="remove_button"
               onClick={() => handleRemoveClick(i)}>Remove</button>}
             {inputList.length - 1 === i && <button 
                className="add_button"
                onClick={handleAddClick}>Add</button>}
           </div>

         </div>
       );
     })}
     <button onClick={prop.handleSubmit(inputList)} className="save_button">Save</button>
     <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
   </div>

 
   {/* <div className="App">
     <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
     {inputList.map((x, i) => {
       return (
         <div className="box">
           <input
             name="firstName"
  placeholder="Enter First Name"
             value={x.firstName}
             onChange={e => handleInputChange(e, i)}
           />
           <input
             className="ml10"
             name="lastName"
  placeholder="Enter Last Name"
             value={x.lastName}
             onChange={e => handleInputChange(e, i)}
           />
           <div className="btn-box">
             {inputList.length !== 1 && <button
               className="mr10"
               onClick={() => handleRemoveClick(i)}>Remove</button>}
             {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
           </div>
         </div>
       );
     })}
     <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
   </div> */}


    </div>
   </div>
  );
 
}