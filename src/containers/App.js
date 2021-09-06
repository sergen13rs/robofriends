import { useEffect } from 'react'
import { connect } from 'react-redux';

import classes from './App.module.css';

import RobotList from '../components/RobotList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import { setSearchField, requestRobots } from '../actions';


function App({searchField, onSearchChange, robots, requestRobots}) {

  useEffect(() => {
    requestRobots();
  }, [requestRobots]);

  const searchHandler = (event) => {
    onSearchChange(event.target.value);
  }

  const filteredRobots = robots.filter(r => r.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className={classes.App}>
      <Header />
      <SearchBox onChange={searchHandler} />
      <ErrorBoundary>
        <RobotList robots={filteredRobots} />
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (searchValue) => dispatch(setSearchField(searchValue)),
  requestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
