import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"


function App() {
// Global state
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Very First Task :)',
            day: 'Nov 5th at 12:30pm',
            reminder: true,
        },
        {
            id:2,
            text: 'Second Important Task <}',
            day: 'Nov 5th at 12:30pm',
            reminder: true,
        },
        {
            id:3,
            text: 'Ignore this one :P',
            day: 'Nov 5th at 12:30pm',
            reminder: true,
        }
    ]
  )
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />

    </div>
  );
}

export default App;
