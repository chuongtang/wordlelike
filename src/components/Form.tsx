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
    <form onSubmit={handleSubmit}>
      <input
        className="text-center border-2 border-gray-400 p-2 m-2 text-3xl"
        type="text"
        onChange={handleChange}
        maxLength={5}
        value={attemp}
        placeholder="Enter your word"
        required
      />
    </form>
  );
};

export default Form;