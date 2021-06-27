import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
          labels: ['Acquisitions', 'Social Impact','Resources','Operations','Marketing','Legal' ],
            datasets: [
              {
                label: '%',
                data: [75,10,5,5,2.5,2.5],
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
        height={150}
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
