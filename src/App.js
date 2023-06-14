import logo from './logo.svg';
import {useState} from "react"
import {ChildArea} from "./ChildArea"

function App() {
  console.log("call App")
  const [text, setText] = useState("")
  const [open, setOpen] = useState(false)

  const onchangeText = (e) => setText(e.target.value);
  const onchangeOpen = (e) => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onchangeText} />
      <br></br>
      <button onClick={onchangeOpen} >表示</button>
      <ChildArea open={open} />
    </div>
  );
}

export default App;
