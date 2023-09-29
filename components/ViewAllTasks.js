import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import getAllTasks from '../api/calls';

export default function ViewAllTasks() {
  const [allUserTasks, setAllUserTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then(setAllUserTasks);
  }, []);
  return (
    <div>
      {allUserTasks.map((item) => (
        <Alert key={item.firebaseKey} variant={item.isDone ? 'danger' : 'secondary'}>
          {item.username}: {item.task}
        </Alert>
      ))}
    </div>
  );
}
