import { useEffect, useState } from 'react'


function Progress_bar(props) {

  const [ doneBarLength, setDoneBarLength ] = useState('45px')
  const [ undoneBarLength, setUndoneBarLength ] = useState('45px')
  
  const [ gapBeforeBegining, setgapBeforeBegining ] = useState('45px')

  const genbackgroundColor = 'blue'
  const genheight = '12px'
  //const doneBarbackgroundColor = 'grey'
  //const undoneBarbackgroundColor = 'blue'

  //const doneBarLength = '45px'
  //const undoneBarLength = '45px'

  //const holdingBarLength = '90px'

  //const minimumdate = '1/1/2021'

  //

  const { minimumdate, start, end} = props

  const days_interval_conversion_to_pixel = (days) => {
    const conversion = "" + Math.round((Math.abs(days))) +'px'
    return conversion
  }

  const  time_conversion = (start,end) => {
    console.log('start: '+start)
    console.log('end: '+end)
    console.log('it entered this function')

    const date1 = new Date(start)
    const presentdate = new Date()
    const date2 = new Date(end)

    //One day in milliseconds
    const oneDay = 1000 * 60 * 60 *24

    //Calculating the time difference between two dates
    const donediffInTime = presentdate.getTime() - date1.getTime()
    const undonediffInTime = date2.getTime() - presentdate.getTime()

    //Calculating the no. of days between two dates
    const donediffInDays = Math.round(donediffInTime / oneDay)
    const undonediffInDays = Math.round(undonediffInTime / oneDay)

    const donediffInDaysToPixel = days_interval_conversion_to_pixel(donediffInDays)
    const undonediffInDaysToPixel = days_interval_conversion_to_pixel(undonediffInDays)    

    setDoneBarLength(donediffInDaysToPixel)
    setUndoneBarLength(undonediffInDaysToPixel)

    console.log('setDoneBarLength: '+donediffInDaysToPixel)
    console.log('setUndoneBarLength: '+undonediffInDaysToPixel)

    //console.log(getNumbersOfDays("2/1/2021", "3/1/2021"))
    
  }

  const  time_conversion_minimum_date = (minimumdate, start) => {
    console.log('minimumdate: '+minimumdate)
    const date1 = new Date(minimumdate)
    const date2 = new Date(start)

    //One day in milliseconds
    const oneDay = 1000 * 60 * 60 *24

    //Calculating the time difference between two dates
    const diffInTime = date1.getTime() - date2.getTime()

    //Calculating the no. of days between two dates
    const donediffInDays = Math.round(diffInTime / oneDay)

    const donediffInDaysToPixel = days_interval_conversion_to_pixel(donediffInDays)

    setgapBeforeBegining(donediffInDaysToPixel)

    console.log("setgapBeforeBegining: "+donediffInDaysToPixel)
    //console.log(getNumbersOfDays("2/1/2021", "3/1/2021"))    
  }

  useEffect(() => {      

      time_conversion(start, end) 
      time_conversion_minimum_date(minimumdate, start)

  }, []) 

  return (
    <div style={{ minWidth: '100%',backgroundColor: 'green'}}>      
    <div style={{ position: 'relative', left: gapBeforeBegining, padding: '2px', height: genheight, minWidth: 'fit-content'}}>     
        <div style={{ display: 'inline-block', backgroundColor: 'grey', height: genheight, width: doneBarLength }}> </div>
        <div style={{ display: 'inline-block', backgroundColor: 'black', height: genheight, width: undoneBarLength}}></div>        
    </div>
    </div>
  );
}

export default Progress_bar;
