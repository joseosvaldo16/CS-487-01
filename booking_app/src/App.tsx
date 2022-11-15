import React, { useState, useEffect } from 'react';
import { EventSettingsModel, Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'

class App extends React.Component {
  private localData: EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2022, 10, 15, 7, 30),
      StartTime: new Date(2022, 10, 15, 6, 30)
    }]
  }

  public render() {
    return <div style={{width: '50%'}}>
      <ScheduleComponent eventSettings={this.localData}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </div>
  }
}

export default App;
