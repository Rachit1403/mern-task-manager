
import { useSelector, useDispatch } from 'react-redux'
import { addTask, removeTask } from '../../store/admin/adminSlice'
import './CSS/admin.css'
import { useState } from 'react'

export function AdminTaskList() {
  const [newTask,setNewTask] = useState(false)

  const [taskData,setTaskData] = useState({
    id:Date.now(),
    heading:'',
    subTasks:[],
    status:'InProgress',
    count:0,
    deadline:'',
    priority:false,
    createdBy:{
      userId:123,
      username:'abc'
    },
    createdAt:'not now',
    updatedAt:'not now'
  })
  function handleChange(e){
    const {name, value} = e.target
    setTaskData({...taskData,[name]:value})
  }
  const tasks = useSelector((state) => state.admin.tasks)
  const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {
          tasks.map(task =>
          <li key={task.id} className='rectangle'>
            {task.heading}
            <button onClick={()=>dispatch(removeTask(task.id))}>Remove</button>
          </li>)
        }
        {
          newTask ?<div className='rectangle'>
            <label>ID: No Need</label><br />
            <label>Heading:
              <input type='text' name='heading' value={taskData.heading} onChange={handleChange}/>
              </label><br />
            <label>subTasks:[]</label><br />
            <label>deadline:
            <input type="date" name="deadline" value={taskData.deadline} onChange={handleChange}/>
            </label><br />
            <label>priority:
              <select name='priority' value={taskData.priority} onChange={handleChange}>
                <option value="">Select</option>
                <option value="true">YES</option>
                <option value="false">NO</option>
              </select>
            </label><br />
            <button onClick={()=>dispatch(addTask(addTask(taskData)))}>Add Task</button>
          </div>:<>Blank</>
        }
      </ul>
      <div>
        <button onClick={()=>setNewTask(!newTask)}>New Task</button>
      </div>
    </div>
    
  )
}