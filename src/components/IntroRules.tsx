import { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';

const IntoRules: React.FC = () => {

  const { level } = useContext(AppContext);

  return (
    <div className="text-center my-4">
     <h3>You have<span className="font-bold"> {level}</span> guesses.</h3>
      <ul className="text-left">
        <li>
          If a letter is in the correct spot, it will be{" "}
          <span className="bg-green font-bold">green</span>
        </li>
        <li>
          If a letter is in the answer but in the <em>wrong</em> spot, it will be{" "}
          <span className="bg-yellow font-bold">yellow</span>
        </li>
        <li>
          If a letter is not in the word, it will be{" "}
          <span className="bg-gray font-bold">gray</span>
        </li>
      </ul>
    </div>
  );
};

export default IntoRules;