import { memo } from 'react';
import classes from './Header.module.css';

const Header = memo(() => {
  return <span className={classes.RoboFriends}>robofriends</span>;
});

export default Header;
