export default function SingleTask({taskTitle,taskIndex,taskStateChange}) {
  const deleteTask = (taskTitle) => {
    const task = localStorage.getItem("Tasks")
    const taskArray = JSON.parse(task)
    const updatedArray = taskArray.filter((atask) => {
      const boolVal = JSON.stringify(atask) !== JSON.stringify(taskTitle)
      return boolVal;
    })
    if(updatedArray.length === 0){
      localStorage.removeItem("Tasks");
    }else{
      localStorage.setItem("Tasks", JSON.stringify(updatedArray));
    }
    taskStateChange(updatedArray)
  }
  return (
    <div className='mb-3 mt-3 p-3 atask'>
        <h4>SN: {taskIndex+1}</h4>
        <h5>Task: {taskTitle}</h5>
        <button id="task" className='btn btn-sm btn-danger' onClick={() => deleteTask(taskTitle)}>Delete</button>
    </div>
  )
}
