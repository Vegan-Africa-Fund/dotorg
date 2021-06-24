import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["June 2, 2021",	"Phase 2",	"Phase 3",	"Phase 4",	"Phase 5",	"Phase 6",	"Phase 7",	"Phase 8",	"Phase 9",	"Phase 10",	"Phase 11",	"Phase 12",	"Phase 13",	"Phase 14",	"Phase 15",	"Phase 16",	"Phase 17"],
            datasets: [
              {
                  label: "Presale",
                  fill: true,
                  data: [50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0,50.0],

                    borderColor: "#F1932D",
                    backgroundColor: [
                      "#F7CB45"

                    ]
              },
              {
                  label: "Liquidity",
                  fill: true,
                  data: [0.0,0.0,0.0,5.0,10.0,15.0,20.0,30.0,40.0,50.0,60.0,70.0,80.0,90.0,100.0,100.0,100.0],
                  borderColor: "#4EB265",
                    backgroundColor: [
                      "#90C987"
                    ]
              },
              {
                  label: "Community",
                  fill: true,
                  data: [5.0,15.0,24.0,32.5,40.0,46.5,52.0,57.0,61.0,65.0,69.0,72.0,75.0,78.0,81.0,83.0,85.0],

                  borderColor: "#EE6677",
                  backgroundColor: [
                    "#FFAABB"
                  ]
              },
              {
                  label: "Team",
                  fill: true,
                  data: [0.0,2.5,5.0,7.5,10.0,12.5,15.0,20.0,25.0,30.0,35.0,40.0,45.0,50.0,55.0,60.0,65.0],
                  borderColor: "#6195CF",
                backgroundColor: [
                  "#7BAFDE"
                ]


              },
              {
                  label: "Public Sale",
                  fill: true,
                  data: [0.0,100.0,190.0,270.0,340.0,400.0,450.0,490.0,520.0,550.0,580.0,600.0,620.0,640.0,660.0,680.0,700.0],
                  borderColor: "#882E72",
                  backgroundColor: [
                    "#9D7DB2"

                  ]

              },

            ]
        })
    }, [])
    return (
        <>
        <Line
        type="Step"
        height={400}
        data = {chartData}
        options={{
          indexAxis: 'x',
            scales: {
                x: {
                    display: true,
                    stacked: true,
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
                    stacked: true,
                    title: {
                        display: true,
                        text: 'VAFs Unlocked in Billions',
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
