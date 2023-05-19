import { useState } from 'react';

// styles
import styles from './TaskItem.module.css';


const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(task.checked);

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked);
    toggleTask(task.id);
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
          <i class="bi bi-check2"></i>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <i class="bi bi-pencil-square"></i>
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <i class="bi bi-trash"></i>
        </button>

      </div>
    </li>
  )
}
export default TaskItem