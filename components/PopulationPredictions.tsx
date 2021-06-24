import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Africa','Asia','Elsewhere'],
            datasets: [
              {
                  label: "2021",
                  data: [1373486000/1000000000,4679661000/1000000000,(747747000+659744000+371108000+43220000)/1000000000],
                  backgroundColor: [
                    "#4EB265"

                  ]
              },
              {
                  label: "2050",
                  data: [2489275000/1000000000,5290263000/1000000000,(710486000+762432000+425200000+57376000)/1000000000],
                  backgroundColor: [
                    '#90C987',
                  ]
              },
              {
                  label: "2100",
                  data: [4280127000/1000000000,4719907000/1000000000,(629563000+679993000+490889000+74916000)/1000000000],
                  backgroundColor: [
                      '#CAE0AB',
                  ]
              },

            ]
        })
    }, [])
    return (
        <>
        <Bar
        type="Bar"
        height={300}
        data = {chartData}
        options={{
          indexAxis: 'x',
            scales: {
                x: {
                    display: true,
                    stacked: false,
                    title: {
                        display: false,
                        text: 'Population',
                        color: "#000",
                        font: {
                            weight: 700,
                            size: 13
                        }
                    }
                },
                y: {
                    display: true,
                    stacked: false,
                    title: {
                        display: true,
                        text: 'Population in Billions',
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
