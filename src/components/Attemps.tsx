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
    return "bg-green-300";
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
    return "bg-yellow-300";
  }

  return "bg-gray-300";
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
              )} h-12 w-12 text-2xl flex border-2 border-gray-300 p-1 m-1 box-border justify-center items-center`}
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