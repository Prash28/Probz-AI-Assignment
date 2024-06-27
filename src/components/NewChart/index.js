import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { CategoryScale, TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-moment';
import sourceData from "../../data/sourceData.json";
import TimeframeSelector from "../TimeframeSelector";
import "../../styles/ChartStyles.css"
ChartJS.register(CategoryScale, TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const NewChart = () => {
    const [timeFrame, setTimeFrame] = useState('day');

    const data = {
        labels: sourceData.map((data) => new Date(data.timestamp)),
        datasets: [
            {
              label: "Value",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                "red", "blue", "yellow", "green", "orange"
              ],
              borderColor: "black",
              borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Built with Chart.JS"
            },
            legend: {
                position: "bottom"
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: timeFrame
                },
                min: new Date('2023-01-01'),
                max: new Date('2023-12-31')
            },
            y: {
                beginAtZero: true
            }
        }
    };

    const handleTimeFrameChange = (newTimeFrame) => {
        setTimeFrame(newTimeFrame);
    };

    return (
        <>
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
            <div className="timecomp-container">
                <TimeframeSelector onTimeFrameChange={handleTimeFrameChange} />
            </div>
        </>
    );
};

export default NewChart;
