import logo from './logo.svg';
import {Form} from './components/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{
        color:"#004d40",
        textAlign:"center",

      }}>Food Recipe App:</h1>
      <Form />
    </div>
  );
}

export default App;
