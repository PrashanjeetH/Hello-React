import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'; 
import Tasks from './components/Tasks';
import { useState, useEffect } from "react";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
// Global state
  const [tasks, setTasks] = useState([])
  
  useEffect(()=>{
    const gettasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    gettasks()
  }, [])

  // Fetch data from json server
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks")
    const data = await response.json()
    return data
  }

  // Fetch single task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  }


  // Add task
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })
    const data = await response.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newtask = {id,...task}
    // setTasks([...tasks, newtask])
    
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
      {method:'DELETE'}
    )  
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle remainder by double click
  const toggleReminder = async (id) => {
    // setTasks(tasks.filter((task) => task.id === id))

    const taskToToggle = await fetchTask(id)
    const upTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(upTask)
    })

    const data = await response.json()
    console.log(data)
    console.log('toggle reminder', id)
    setTasks(tasks.map(
      (task) => task.id === id ? 
        {...task, reminder:!task.reminder} :
        task
      )
    )
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {
          tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : 
            'No tasks to show!'
        }
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
