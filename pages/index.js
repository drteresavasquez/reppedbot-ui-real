import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import getAllTasks from '../api/calls';

function Home() {
  const [allUserTasks, setAllUserTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then(setAllUserTasks);
  }, []);

  return (
    <>
      <h2>The Repped Team Hustle List</h2>
      {allUserTasks.map((item) => (
        <Alert key={item.firebaseKey} variant={item.isDone ? 'danger' : 'secondary'}>
          {item.username}: {item.task}
        </Alert>
      ))}
    </>
  );
}

export default Home;
