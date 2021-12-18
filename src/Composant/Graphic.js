import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from 'recharts';

function Graphic(props){
    const {datalist} = props
  const liste = datalist.map((elem) => ({
    heartrate: elem.heartrate,
    timestamp: new Date(elem.timestamp).toLocaleTimeString('fr-FR'),
  }))
 
return (
    <LineChart width={1200} height={400} data={liste}>
        <Line type="monotone" dataKey="heartrate" stroke="#82ca9d" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="heartrate"/>
        <Legend />
    </LineChart>
);
}

export default Graphic;