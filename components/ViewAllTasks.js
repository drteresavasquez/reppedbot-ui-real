import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import getAllTasks from '../api/calls';

export default function ViewAllTasks() {
  const [allUserTasks, setAllUserTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then(setAllUserTasks);
  }, []);
  return (
    <>
      <h2>The Repped Hustle List</h2>
      {allUserTasks.map((item) => (
        <Card bg={item.isDone ? 'success' : 'dark'} key={item.firebaseKey} style={{ color: item.isDone ? '#58daa0' : 'white' }} className="mb-2">
          <Card.Body>
            <Card.Text>
              {item.isDone ? (
                <b>
                  ✅{' '}
                  <s>
                    <i>
                      {item.username}: {item.task}
                    </i>
                  </s>
                </b>
              ) : (
                <span>
                  ⬜{' '}
                  <span style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                    <b>{item.username}:</b>
                  </span>{' '}
                  {item.task}
                </span>
              )}{' '}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
