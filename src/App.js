import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
  ]);

  const onArchiveHandler = (id) => {
    const newState = tasks.map((obj) => {
      if (obj.id === id) {
        return { ...obj, state: 'TASK_ARCHIVED' };
      }
      return obj;
    });

    setTasks(newState);
  };

  const onPinHandler = (id) => {
    const newState = tasks.map((obj) => {
      if (obj.id === id) {
        return { ...obj, state: 'TASK_PINNED' };
      }
      return obj;
    });

    setTasks(newState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TaskList
          loading={false}
          tasks={tasks}
          onArchiveTask={onArchiveHandler}
          onPinTask={onPinHandler}
        />
      </header>
    </div>
  );
}

export default App;
