import Attemps from "./Attemps";

export interface PlayAgainProps {
  answer: string;
  attemps: string[];
}

const PlayAgain: React.FC<PlayAgainProps> = ({ answer, attemps, children }) => {
  return (
    <div className="grid place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{children}</h1>
        <h2>
          The answer was <span className="text-green">{answer}</span>
        </h2>

        <Attemps attemps={attemps} answer={answer} />
         <a className="doodle doodle-border" href="/"> Play again? </a>  
      </div>
    </div >
  );
};

export default PlayAgain;