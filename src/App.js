import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  // eslint-disable-next-line
  const [tasks, setTasks] = useState([])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ?
        { ...task, reminder: !task.reminder } : task))
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    setShowAddTask(false)
  }

  return (
    <div className='App'>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask ? <AddTask onAdd={addTask} /> : ''}
        {tasks.length > 0 ?
          <Tasks tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder} /> :
          ('No tasks to show')}
        <p style={{ marginTop: '40px', fontSize: '10px' }}>Double Click to toggle reminder</p>
      </div>
    </div>
  )
}


// If you want to use the class method instead of function
// eslint-disable-next-line
// class App2 extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <Header />
//       </div>
//     )
//   }
// }

export default App;
