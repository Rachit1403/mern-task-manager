import { AdminTaskList } from "../components/Admin/AdminTaskList"
import {data} from '../Data/data'
import '../components/Admin/CSS/admin.css'
import './App.css'
function App() {
  return(
    <div className="app">
    hello
    {console.log('app')}
    <AdminTaskList />
    {
      data.map(item => <ul key={item.id} className="rectangle">
        <li>{item.id}</li>
        <li>{item.heading}</li>
        {/* <li>{item.subTasks}</li>
        <li>{item.status}</li>
        <li>{item.count}</li>
        <li>{item.deadline}</li>
        <li>{item.priority}</li> */}
        {/* <li>{JSON.stringify(item.createdBy)}</li>
        <li>{item.createdAt}</li>
        <li>{item.updatedAt}</li> */}
      </ul>)
    }
    </div>
  )
}

export default App
