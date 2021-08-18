import { useState, useEffect } from 'react';

import classes from './App.module.css';

import RobotList from '../components/RobotList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

// import { robots } from './metadata';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  }

  const filteredRobots = robots.filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className={classes.App}>
      <span className={classes.RoboFriends}>robofriends</span>
      <SearchBox onChange={searchHandler} />
      <ErrorBoundary>
        <RobotList robots={filteredRobots} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
