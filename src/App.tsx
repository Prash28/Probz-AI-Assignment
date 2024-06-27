import React, { useState } from 'react';
import './App.css';
import { Chart as ChartJS} from 'chart.js';
import sourceData from "./data/sourceData.json";
import NewChart from "./components/NewChart";

function App() {
  const [userData, setUserData] = useState({
    labels: sourceData.map((data) => {
      return new Date(data.timestamp)
  }),
    datasets: [
      {
        label: "Value",
        data: sourceData.map((data) => data.value),
        backgroundColor: [
          "red","blue","yellow","green","orange"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Implement a Charting Library in React.js</h1>
      </header>
      <div className="App-main">
        <NewChart />
      </div>
    </div>
  );
}

export default App;
