import React from 'react'
import {arc} from 'd3'

const ArcChart = () => {
    const width=960
    const height = 500
    const centerX = width / 2
    const centerY = height / 2
    const strokeWidth = 10
    const eyeRadius = 20
    const eyeOffsetX = 90
    const eyeOffsetY = 100
    const mouthWidth = 10
    const mouthRadius = 120
    const newArc= arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3/2);
    return (
        <>
        <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
        <circle 
        r={centerY - strokeWidth / 2}
        fill="yellow"
        stroke="black"
        strokeWidth={strokeWidth} />
        <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius} />
        <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius} />
        <path d={newArc()} />
        </g>
        </svg>
        </>
    )
}

export default ArcChart