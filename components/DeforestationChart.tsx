import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
            labels: [''],
            datasets: [
              {
                  label: "Urban Expansion",
                  data: [1000],
                  backgroundColor: [
                    '#FEDA8B',

                  ]
              },
              {
                  label: "Infrastructure",
                  data: [2000],
                  backgroundColor: [
                    '#FDB366',
                  ]
              },
              {
                  label: "Mining",
                  data: [2500],
                  backgroundColor: [
                      '#F67E4B',
                  ]
              },
              {
                  label: "Commercial Agriculture",
                  data: [7500],
                  backgroundColor: [
                    '#A50026',
                  ]
              },
                {
                    label: "Local Agriculture",
                    data: [15000],
                    backgroundColor: [
                      '#DD3D2D',
                    ]
                },

            ]
        })
    }, [])
    return (
        <>
        <Bar
        type="Bar"
        height={150}
        data = {chartData}
        options={{
            scales: {
                x: {
                    display: true,
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Causes of Deforestation',
                        color: "#000",
                        font: {
                            weight: 700,
                            size: 13
                        }
                    }
                },
                y: {
                    display: true,
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Deforested Area (km2/year)',
                        color: "#000",
                        font: {
                            weight: 700,
                            size: 13
                        }
                    },
                }
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
