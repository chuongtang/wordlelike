export interface AttempsProps {
  attemps: string[];
  answer: string;
}

const setBackgroundColor = (
  attemp: string,
  index: number,
  answer: string
): string => {
  if (answer[index] === attemp[index]) {
    return "bg-green";
  }

  const countOccuringInAnswer = answer
    .split("")
    .filter((letter: string) => letter === attemp[index]).length;

  const occuringInAttempBeforeCurrentIdx = attemp
    .slice(0, index)
    .split("")
    .filter((letter: string) => letter === attemp[index]).length;

  if (
    answer.includes(attemp[index]) &&
    countOccuringInAnswer >
    occuringInAttempBeforeCurrentIdx
  ) {
    return "bg-yellow";
  }

  return "bg-gray"
};

const Attemps: React.FC<AttempsProps> = ({ attemps, answer }) => {
  return (
    <ol className="m-4">
      {attemps.map((attemp, attempIndex) => (
        <li key={attempIndex} className="grid grid-cols-5">
          {attemp.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={`${setBackgroundColor(
                attemp,
                letterIndex,
                answer
              )} attempBox flex doodle-border justify-center place-content-center`}
            >
              {letter}
            </span>
          ))}
        </li>
      ))}
    </ol>
  );
};

export default Attemps;