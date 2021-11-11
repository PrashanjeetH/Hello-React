const tasks = [
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

const Tasks = () => {
    return (
        // Empty fragment for parenting element
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks