import React, { useState, setState } from 'react'

import './Form.css'

export const toDateInputConstraint = (date) => (date || new Date()).toISOString().slice(0, 10)

export const Form = ({ handleClick }) => {


  const minDate = (new Date()).toISOString().slice(0, 10)

  const [data, setData] = useState({
    name: "",
    room: "Library",
    startDate: null,
    startTime: "",
    endDate: null,
    endTime: ""
  })

  function changeName(e) {
    setData({ ...data, name: e.target.value })
  }

  function changeRoom(e) {
    setData({ ...data, room: e.target.value })
  }

  function changeStartTime(e) {
    setData({ ...data, startTime: e.target.value })
  }

  function changeEndTime(e) {
    setData({ ...data, endTime: e.target.value})
  }

  function changeStartDate(e) {
    const newDate = e.target.valueAsDate
    let newEndDate = data.endDate

    if (newDate.getTime() > newEndDate.getTime()){

        newEndDate = newDate
    } 

    setData({ ...data, startDate: e.target.valueAsDate, endDate: newEndDate})
  }

  function changeStartDate(e) {
    const newDate = e.target.valueAsDate
    setData({
      ...data,
      startDate: e.target.valueAsDate,
      endDate: (newDate.getTime() > data.endDate.getTime()) ?
        newDate : data.endDate,
    })
  }

  function changeEndDate(e) {
    setData({ ...data, endDate: e.target.valueAsDate})
  }




  function clear() {
    setData({
      name: "",
      room: "Library",
      startDate: null,
      startTime: "",
      endDate: null,
      endTime: ""
    })
  }

  return (
    <div className = 'content'>
        
        <h2>Name: <input className='input' onChange={e => changeName(e)}></input></h2>
        <div>
          <h2>Room: <select className='select' onChange={e=> changeRoom(e)} value="Library">
                          <option className='input' value="Library">Library</option>
                          <option className='input' value="Study Hall">Study Hall</option>
                        </select></h2>
                        </div>
        <div>  
          <h2>Start Date: <input 
          className='input' 
          height = {50} 
          onChange={e=>changeStartDate(e)} 
          type="date"
          min={toDateInputConstraint()}
          value={toDateInputConstraint(data.startDate)}
          ></input></h2>
        </div>
        <h2>Start Time: <input className='input' onChange={e=>changeStartTime(e)} type="time"></input></h2>
        <div>
          <h2>End Date: <input className='input' 
          onChange={e=>changeEndDate(e)} 
          type="date"
          min={toDateInputConstraint(data.startDate)}
          value={toDateInputConstraint(data.endDate)}
          ></input></h2>
        </div>
        <h2>End Time: <input className='input' onChange={e=>changeEndTime(e)} type="time"></input></h2>
        <div className='button-container'>
          <button className='button' onClick={() => {handleClick(data)
                                  }}>Submit</button>
          <button className='right-button' onClick={() => clear()}>Clear</button>
        </div>
        
    </div>
  )





}


export default Form
