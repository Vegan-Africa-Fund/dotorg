import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
          labels: ['Legal', 'Marketing', 'Social Impact', 'Operations', 'R&D','Tech Eng','Acquisitions'],
            datasets: [
              {
                label: '%',
                data: [2.5,2.5,5,5,15,20,50],
                backgroundColor:[
                  "#F1932D",
                  "#BA8DB4",
                  "#882E72",
                  "#1965B0",
                  "#7BAFDE",
                  "#4EB265",
                  "#CAE0AB",
                  "#F7F056",
                  "#A5170E",
                 ]
              }
            ]
        })
    }, [])
    return (
        <>
        <Doughnut
        type="Doughnut"
        height={350}
        data = {chartData}
        options={{
            title: {
              display: true,
              text: 'A chart'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }}/>
        </>
    )
}

export default DeforestationChart;
