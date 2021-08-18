import classes from './SearchBox.module.css';

const SearchBox = ({onChange}) => {
  return (
    <input
      className={classes.Input}
      type='search'
      placeholder="Search name ..."
      onChange={onChange}
    />
  );
};

export default SearchBox;
