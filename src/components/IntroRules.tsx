const IntoRules: React.FC = () => {
  return (
    <div className="text-center my-4">
     
      <ul className="text-left">
        <li className="">Guess the word by typing it in the input below.</li>
        <li>You have 5 guesses.</li>
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