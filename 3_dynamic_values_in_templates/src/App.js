import logo from './logo.svg';
import './App.css';

const title = "これは title 定数です";
const num = 120;
const dog = {name:"ルーちゃん", breed:"キャバリア"}

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>numの値は {num} です</p>
        <p>{dog.name}は{dog.breed}です</p>
        <p>{ [1,2,3,4,5] }</p>
      </div>
    </div>
  );
}

export default App;
