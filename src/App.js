import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {task: "Wash dishes", priority: "low"},
    {task: "Cook meal", priority: "high"}
  ]);

  const [newTask, setNewTask] = useState("")

  const [newPriorty, setNewPriorty] = useState()

  const tasksNodes = tasks.map( (task, index) => {
    return (
      <li key={index} className={task.priority == 'high' ? 'high' : 'low'}>
        <span>
          {task.task}
        </span>
      </li>
    )
  })

  const handelTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handelPriortyInput = (event) => {
      setNewPriorty(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [...tasks]
    copyTasks.push({
      task: newTask,
      priority: newPriorty
    })
    setTasks(copyTasks)
    setNewTask("")
  }

  return (
    <>
    <h1>To do List</h1>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add new task:</label>
        <input id='new-task' type='text' value={newTask} onChange={handelTaskInput}/>
        <div onChange={handelPriortyInput}>
          <input id='low' type='radio' value='low' name='priorty' required/>
          <label htmlFor='low'>Low</label>
          <input id='high' type='radio' value='high' name='priorty' required/>
          <label htmlFor='high'>High</label>
        </div>
        <button type='submit' value='save-new-task'>Submit</button>
      </form>

      <ul>
        <p>Low priority tasks are green, high priority tasks are orange</p>
        {tasksNodes}
      </ul>

    </>
  );
}

export default App;
