import classes from './RobotCard.module.css';

const RobotCard = ({name, email, img}) => {
  return (
    <div className={classes.Card}>
      <img alt={name} src={img} />
      <span className={classes.Name}>{name}</span>
      <span className={classes.Email}>{email}</span>
    </div>
  );
};

export default RobotCard;
