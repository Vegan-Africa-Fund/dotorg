import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
          labels: ['Presale', 'Team', 'Community', 'Liquidity', 'Public Sale'],
            datasets: [
              {
                label: '%',
                data: [5,6.5,8.5,10,70],
                backgroundColor:[
                  "#9BD2E1",
                  "#7BBCE7",
                  "#9398D2",
                  "#9A709E",
                  "#C2E3D2",
                  "#FEFBE9",
                  "#EAF0B5",
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
