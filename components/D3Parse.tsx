import React, {useEffect, useState} from 'react';
import * as d3 from "d3";


const D3Parse = () => {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        d3.csv('https://gist.githubusercontent.com/blackpintz/3fe7539cf46a0b91cd0ac60eff356d4f/raw/cssColors.csv')
            .then(setData)
        
        console.log(data)

    }, [])
    return (
        <></>
    )
}

export default D3Parse