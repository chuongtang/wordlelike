const LevelSelector: React.FC = () => {
  return (
    <div className="text-center my-4">
      <h1>Wordlol</h1>
      <p className="italic">How many words can you wordle?</p>
      <p>
        {/* <label for="example-select1">Example select</label> */}
        <select id="example-select1">
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
      </p>
    </div>
  );
};

export default LevelSelector;