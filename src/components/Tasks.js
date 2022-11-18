const tasks = [
    {
        id: 1,
        text: "Doctor's Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Shopping",
        day: "March 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 1,
        text: "Swimming",
        day: "April 5th at 2:30pm",
        reminder: false,
    },

]

const Tasks = () => {
  return (
    <div>
        {tasks.map(t => {
            return (
                <>
                <h2>{t.text}</h2>
            <p>{t.day}</p>
            </>
            )
        })
}
    </div>
  )
}
export default Tasks
