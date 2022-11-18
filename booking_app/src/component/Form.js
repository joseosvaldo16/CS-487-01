import React, { useState, setState } from 'react'

export default function Form({handleClick}) {
  const [data, setData] = useState({
    name: "",
    room: "Library",
    startDate: null,
    startTime: "",
    endDate: null,
    endTime: ""
  })

  function changeName(e) {
    setData({...data, name: e.target.value})
  }

  function changeRoom(e) {
    setData({...data, room: e.target.value})
  }

  function changeStartTime(e) {
    setData({...data, startTime: e.target.value})
  }

  function changeEndTime(e) {
    setData({...data, endTime: e.target.value})
  }

  function changeStartDate(e) {
    setData({...data, startDate: e.target.value})
  }

  function changeEndDate(e) {
    setData({...data, endDate: e.target.value})
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
    <div style={{width: '50%'}}>
        <label>Name: <input onChange={e => changeName(e)}></input></label>
        <label>Room: <select onChange={e=> changeRoom(e)} value="Library">
                        <option value="Library">Library</option>
                        <option value="Study Hall">Study Hall</option>
                      </select></label>
        <label>Start Date: <input onChange={e=>changeStartDate(e)} type="date"></input></label>
        <label>Start Time: <input onChange={e=>changeStartTime(e)} type="time"></input></label>
        <label>End Date: <input onChange={e=>changeEndDate(e)} type="date"></input></label>
        <label>End Time: <input onChange={e=>changeEndTime(e)} type="time"></input></label>
        <button onClick={() => {handleClick(data)
                                }}>Submit</button>
        <button onClick={() => clear()}>Clear</button>
    </div>
  )
}