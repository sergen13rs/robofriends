import classes from "./RobotList.module.css";

import RobotCard from './RobotCard';

const RobotList = ({ robots }) => {
  if (true) {
    throw new Error('Noooooo!');
  }
  return (
    <div className={classes.CardsList}>
      {
        robots.map((robot, index) => (
          <RobotCard
            key={robot.email}
            img={`https://robohash.org/${index}?size=200x200`}
            name={robot.name}
            email={robot.email}
          />
        ))
      }
    </div>
  )
};

export default RobotList;
