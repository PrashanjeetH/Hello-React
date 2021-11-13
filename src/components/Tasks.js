import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        // Empty fragment for parenting element
        <>
            {tasks.map((task, index) => (
                // Task from component "Task.js" and task is prop from App i.e. main component
                // key is mandatory to use with map where a key is a unique identifier for each entry in list/array 
                // passed in map() function
                <Task 
                    // key={index} 
                    key = {task.id}
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks