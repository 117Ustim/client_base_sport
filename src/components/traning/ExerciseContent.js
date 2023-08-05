import Exercise from "./Exercise";

const ExerciseContent = (props) => {
  return (
    <>
      {props.weeks?.map((w) => {
        return (
          <div className="traning-container">
            <div className="traning">
              <div className="traning-date">
                <div className="traning-day">{w.day}</div>
                <div className="date">{w.date}</div>
              </div>
              <div>
                {w.exercises?.map((ex) => {
                  return <Exercise name={ex.name} times={ex.times} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExerciseContent;