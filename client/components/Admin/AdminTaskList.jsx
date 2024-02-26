
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/admin/adminSlice'
import './CSS/admin.css'

export function AdminTaskList() {
  const count = useSelector((state) => state.admin.value)
  const dispatch = useDispatch()

  return (
    <div className='rectangle'>
      <div>
      {console.log('admintasklist')}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        > 
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}