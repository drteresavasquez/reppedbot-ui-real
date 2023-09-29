const dbURL = 'https://twitch-bot-ba4ca-default-rtdb.firebaseio.com/tasks';

const getAllTasks = () => fetch(`${dbURL}.json`)
  .then((response) => response.json())
  .then((data) => Object.values(data));

export default getAllTasks;
