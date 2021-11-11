import Task from './Task'

const Tasks = ({ tasks }) => {
    return (
        // Empty fragment for parenting element
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ))}
        </>
    )
}

export default Tasks