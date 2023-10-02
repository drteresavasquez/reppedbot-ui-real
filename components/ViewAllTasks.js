import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import getAllTasks from '../api/calls';

export default function ViewAllTasks() {
  const [doneUserTasks, setDoneUserTasks] = useState([]);
  const [undoneUserTasks, setUndoneUserTasks] = useState([]);

  const setUp = () => {
    getAllTasks().then((tasks) => {
      const done = tasks.filter((t) => t.isDone);
      const undone = tasks.filter((t) => !t.isDone).reverse();
      setDoneUserTasks(done);
      setUndoneUserTasks(undone);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setUp();
    }, 5000);

    return () => clearInterval(interval);
  }, [doneUserTasks, undoneUserTasks]);
  return (
    <>
      <h2>The Repped Hustle List</h2>
      {undoneUserTasks.map((item) => (
        <Card bg={item.isDone ? 'success' : 'dark'} key={item.firebaseKey} style={{ color: item.isDone ? '#58daa0' : 'white' }} className="mb-2">
          <Card.Body>
            <Card.Text>
              <span>
                ⬜{' '}
                <span style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                  <b>{item.username}:</b>
                </span>{' '}
                {item.task}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      {doneUserTasks.map((item) => (
        <Card bg={item.isDone ? 'success' : 'dark'} key={item.firebaseKey} style={{ color: item.isDone ? '#58daa0' : 'white' }} className="mb-2">
          <Card.Body>
            <Card.Text>
              <b>
                ✅{' '}
                <s>
                  <i>
                    {item.username}: {item.task}
                  </i>
                </s>
              </b>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
