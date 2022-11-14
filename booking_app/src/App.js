import React, { useState, useEffect } from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'

function App() {
  

  return (
    <div style={{width: '50%'}}>
      <ScheduleComponent>
        <Inject currentView='Week' services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </div>
  );
}

export default App;
