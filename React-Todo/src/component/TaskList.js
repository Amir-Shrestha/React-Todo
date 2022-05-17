import SingleTask from './SingleTask'

export default function TaskList({taskStateChange}) {
  // alert("list")
  const task = localStorage.getItem("Tasks")
  const taskArray = JSON.parse(task)
  let arrayAllTaskComponent;
  if(taskArray !==  null ){
    arrayAllTaskComponent = taskArray.map((taskTitle,index) => <SingleTask taskTitle={taskTitle} taskIndex={index} taskStateChange={taskStateChange} key={index}/> ) //display individual component for each data in itereble with unique key.
  }else{
    arrayAllTaskComponent = <p>No task assigned !" </p>
  }
  return (
    <div className="pb-2">
      <h2>Task List:</h2>
      {arrayAllTaskComponent}
      {/* {arrayAllTaskComponent} array of multiple component */}

    </div>
  )
}
