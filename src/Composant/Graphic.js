import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Graphic(props){
  const {datalist} = props
  const liste = datalist.map((elem) => ({
    heartrate: elem.heartrate,
    heure: new Date(elem.timestamp).toLocaleTimeString('fr-FR'),
  }))

  return (
    <div>
      <LineChart width={1000} height={300} data={liste}>
        <Line type="monotone" dataKey="heartrate" stroke="blue" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="heure" />
        <YAxis/>
      </LineChart>
    </div>

  );
}

export default Graphic;