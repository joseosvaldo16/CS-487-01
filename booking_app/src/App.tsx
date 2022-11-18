import React, { useState, useEffect } from 'react';
import Form from './component/Form'
import { ResourcesDirective, ResourceDirective, EventSettingsModel, Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'


function App() {
  const [events, setEvents] = useState<any>([{
      Id: 1,
      ResourceId: 1,
      Subject: "John Doe",
      EndTime: new Date(2022, 10, 15, 7, 30),
      StartTime: new Date(2022, 10, 15, 6, 30)
    },
    {
      Id: 2,
      ResourceId: 2,
      Subject: "Tim Smith",
      EndTime: new Date(2022, 10, 15, 7, 30),
      StartTime: new Date(2022, 10, 15, 6, 30)
    }])

  let resourceDataSource = [
    {Name: "Library", Id: 1, Color: '#ea7a57'},
    {Name: 'Study Hall', Id: 2, Color: '#357CD2'}
  ]

  function handleClick(newEvent): any {
    let findID = resourceDataSource.find(resource => resource.Name === newEvent.room)
    let eventObject = {
      Subject: newEvent.name,
      Id: findID ? findID.Id : null,
      ResourceId: findID ? findID.Id : null,
      StartTime: new Date(newEvent.startDate + "T" + newEvent.startTime),
      EndTime: new Date(newEvent.endDate + "T" + newEvent.endTime)
    }
    
    setEvents(prevEvents => [...prevEvents, eventObject])
  }

    return (<div>
        <div style={{width: '50%'}}>
          <ScheduleComponent eventSettings={{dataSource: events}}>

            <ResourcesDirective>
              <ResourceDirective dataSource={resourceDataSource} textField='Name' field='ResourceID' title='Resource Name' idField='Id' colorField='Color' name='Resources'></ResourceDirective>
            </ResourcesDirective>

            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
          </ScheduleComponent>
          <Form handleClick={handleClick}></Form>
        </div>
    </div>)
  
}

export default App;
