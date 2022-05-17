import '../css/App.css';
import '../css/myStyle.css';
import AddNewTask from './AddNewTask'
// import AddNewTask from './TestFormComponentState'
import TaskList from './TaskList'
import {useState} from "react"

function App() {
  const [taskState, setTasks] = useState()
  const taskStateChange = (taskArray) => {
    setTasks(taskArray)
  }
  return (
    <div className="container">
      <AddNewTask taskStateChange={taskStateChange}></AddNewTask>
      <TaskList taskStateChange={taskStateChange}></TaskList>
    </div>
  );
}

export default App;
