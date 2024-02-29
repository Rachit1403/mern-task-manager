
import { useSelector, useDispatch } from 'react-redux'
import { addTask, removeTask } from '../../store/admin/adminSlice'
import './CSS/admin.css'
import './CSS/addTask.css'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function AdminTaskList() {
    
  const initialTaskdata = {
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
  }
  const tasks = useSelector((state) => state.admin.tasks)
  const dispatch = useDispatch()

  const [newTask,setNewTask] = useState(true)

  const [taskData,setTaskData] = useState(initialTaskdata)
  function handleChange(e){
    const {name, value} = e.target
    setTaskData({...taskData,[name]:value})
  }
  function handleAddTask(){
    console.log(taskData)
    dispatch(addTask(taskData))
    setNewTask(!newTask)
    setTaskData(initialTaskdata)
  }
  

  return (
    <div>
      <ul className='flex-container'>
        {
          tasks.map(task =>
            <Card sx={{ minWidth: 275 }} key={task.id} className='Card'>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {task.id}
                </Typography>
                <Typography variant="h5" component="div">
                  {task.heading}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Status: {task.status}<br />
                </Typography>
                <Typography variant="body2">
                  Created By: {task.createdBy.username}<br />
                  {task.createdAt}<br />
                </Typography>
              </CardContent>
              <CardActions >
                <Button size="small" onClick={()=>dispatch(removeTask(task.id))}>Remove</Button>
              </CardActions>
            </Card>)
        }
        {
          newTask ?<div className='add-task'>
            <label>ID: No Need</label><br />
            <label>Heading:</label><br />
            <input type='text' name='heading' value={taskData.heading} onChange={handleChange}/><br />
            <label>Sub-Tasks:[ ]</label><br />
            <label>Deadline:
            <input type="date" name="deadline" value={taskData.deadline} onChange={handleChange}/>
            </label><br />
            <label>Priority:</label>
            <select name='priority' value={taskData.priority} onChange={handleChange} className='select-option'>
                <option value="">Select</option>
                <option value="true">YES</option>
                <option value="false">NO</option>
            </select>
            <br />
            <button className='buttonAdd' onClick={handleAddTask}>Add Task</button>           
          </div>:<button className='newbutton'onClick={()=>setNewTask(!newTask)}>New Task</button>
        }
      </ul>
      <div>
        hello frnds
      </div>
    </div>
    
  )
}