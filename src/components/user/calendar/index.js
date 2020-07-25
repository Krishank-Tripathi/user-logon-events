import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const MyCalendar = (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const getmydates = () =>{
    let mydate = [];
    mydate = props.eventDates.map(event => {
	let date = event.start_time.split(' ');
	
    return ({ 
	  year: parseInt(date[2]),
      month: (months.indexOf(date[0])+1),
      day: parseInt(date[1]),
	  });
    })
    return mydate;
  }

  let dates = getmydates();
  console.log(dates);

  const preselectedDays = [...dates];

  const [selectedDayRange, setSelectedDayRange] = useState(
    preselectedDays
  );
  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      shouldHighlightWeekends
    />
  );
};

export default MyCalendar;