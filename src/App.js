import logo from './logo.svg';
import './App.css';



function RH(){
  return Math.floor(Math.random()*160) + 40;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       <RH/> BPM
        </p>
      </header>
    </div>
  );
}


export default App;

