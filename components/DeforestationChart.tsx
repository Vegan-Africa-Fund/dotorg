import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Urban Expansion', 'Infrastructure', 'Mining', 'Agriculture'],
            datasets: [
                {
                    label: "Local Agriculture",
                    data: [1000,2000,2500,15000],
                    backgroundColor: [
                        'rgba(229, 115, 115, 1)', 
                        'rgba(104, 159, 56, 1)', 
                        'rgba(197, 225, 165, 1)', 
                        'rgba(126, 87, 194, 1)'
                    ]
                },
                {
                    label: "Commercial Agriculture",
                    data: [7500],
                    backgroundColor: ['#ff80ab']
                }
            ]
        })
    }, [])
    return (
        <>
        <Bar 
        type="Bar"
        height={350}
        data = {chartData}
        options={{
            scales: {
                x: {
                    display: true,
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
                    title: {
                        display: true,
                        text: 'Deforested Area(km2/y)',
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