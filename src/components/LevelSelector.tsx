import react, {useContext} from 'react';
import AppContext from '../context/AppContext'

const LevelSelector: React.FC = () => {
  const {level, setLevel} = useContext(AppContext);
  const selectChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    e.preventDefault();
    setLevel(parseInt(e.target.value));
    console.log("SetLevel with",e.target.value);
  }

  return (
    <div className="text-center">
      
      <p><span>Select your level: </span>
        {/* <label for="example-select1">Example select</label> */}
        <select onChange={selectChange} className="font-bold">
          <option value="3">3 .</option>
          <option value="4">4 .</option>
          <option value="5">5 .</option>
          <option value="6">6 .</option>
          <option value="7">7 .</option>
        </select>
        <span> characters word</span>
      </p>
      
    </div>
  );
};

export default LevelSelector;