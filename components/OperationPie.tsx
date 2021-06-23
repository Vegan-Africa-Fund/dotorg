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
                  "#EAF0B5",
                  "#C2E3D2",
                  "#9BD2E1",
                  "#7BBCE7",
                  "#9398D2",
                  "#9D7DB2",
                  "#906388",
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
