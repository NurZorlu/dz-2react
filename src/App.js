import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  return (
    <div className="App">
      <Input setName={setName} setSurname={setSurname} />
      <Button name={name} surname={surname} />
    </div>
  );
}

export default App;
