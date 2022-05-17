function AddNewTask(props) {
  // alert("add")
  console.log("hi")
  const addNewTask = (e) => {
    e.preventDefault();
    const inputTask = document.getElementById("input-task");
    const task = localStorage.getItem("Tasks")
    const newTask = inputTask.value
    let taskArray;
    if(task == null){
      taskArray = [newTask]
    }else{
      taskArray = JSON.parse(task)
      taskArray.push(newTask)
    }
    const newTaskJSON = JSON.stringify(taskArray)
    localStorage.setItem("Tasks", newTaskJSON);
    props.taskStateChange(taskArray)
    inputTask.value = ""
  }
  const element = <>
    <h1 className="pt-3">Add New Task:</h1>
    <input type="text" className="form-control" id="input-task" placeholder="Your task"/>
    <button type="submit" className="btn btn-primary mt-3" onClick={addNewTask}>Add</button>
    <hr/>
    </>
  
  return element
}

export default AddNewTask
