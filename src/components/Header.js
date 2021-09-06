import { memo } from 'react';
import classes from './Header.module.css';

const Header = memo(() => {
  return <span className={classes.RoboFriends}>robofriends app</span>;
});

export default Header;
