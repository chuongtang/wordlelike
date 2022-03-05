import { useState } from "react";

export interface FormProps {
  attemps: string[];
  setAttemps: (attemps: string[]) => void;
}

const Form: React.FC<FormProps> = ({ attemps, setAttemps }: FormProps) => {
  const [attemp, setAttemp] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (attemp.length !== 5) {
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
        maxLength={5}
        value={attemp}
        // placeholder="Enter your guess "
        required
      />
    </form>
    <h3>👈 Enter you guess here</h3>
    </div>
  );
};

export default Form;