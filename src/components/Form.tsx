import { useState, useContext } from "react";
import AppContext from '../context/AppContext'

export interface FormProps {
  attemps: string[];
  setAttemps: (attemps: string[]) => void;
}

const Form: React.FC<FormProps> = ({ attemps, setAttemps }: FormProps) => {

  const { level } = useContext(AppContext);
  const [attemp, setAttemp] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (attemp.length !== level) {
      return;
    }

    setAttemps([...attemps, attemp]);
    setAttemp("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAttemp(event.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase());
  };

  return (
    <div className="flex">
    <form onSubmit={handleSubmit} className="doodle">
      <input
        // className="doodle doodle-border"
        type="text"
        onChange={handleChange}
        maxLength={level}
        value={attemp}
        // placeholder="Enter your guess "
        required
      />
    </form>
    <span>👈 Enter your guess here</span>
    </div>
  );
};

export default Form;