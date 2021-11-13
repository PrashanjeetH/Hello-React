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
            reminder: false,
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
            reminder: false,
        }
    ]
  )
  
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle remainder by double click
  const toggleReminder = (id) => {
    // setTasks(tasks.filter((task) => task.id === id))
    console.log('toggle reminder', id)
    setTasks(tasks.map(
      (task) => task.id === id ? 
        {...task, reminder:!task.reminder} :
        task
      )
    )
  }

  return (
    <div className="container">
      <Header />

      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : 
          'No tasks to show!'
      }

    </div>
  );
}


export default App;
