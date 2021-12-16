import logo from './logo.svg';
import './App.css';
import InstantHeartrate from "./Composant/InstantHeartrate";




function RH(){
  return Math.floor(Math.random()*160) + 40;
}

function App() {
  const [measurements, setMeasurement] = useState([]);
  useEffect(() => {
    setInterval(() => {
      setMeasurement((prev) => {
        const measurement = {
          timestamp: new Date().getTime(),
          heartrate: RH(),
        }
        return [...prev, measurement]
      });
    }, 2000);
  }, [])
  const measurement = measurements[measurements.length -1];
  console.log(measurements)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rythme cardiaque
        </p>
        <InstantHeartrate data={measurement}/>
      </header>
    </div>
  );
}

export default App;