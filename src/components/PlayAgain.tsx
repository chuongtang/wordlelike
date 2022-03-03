import Attemps from "./Attemps";
import { Link } from 'react-router-dom';

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
          The answer was <span className="font-bold">{answer}</span>
        </h2>
        <Attemps attemps={attemps} answer={answer} />
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">

          ⚜ Play Again 🔱

        </Link>
      </div>
    </div>
  );
};

export default PlayAgain;