import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';


const ChartArea = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
        smooth: true,
        line: {
            color: '#ff993c',
            size: 4
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:#ffa200 1:#ffb431',
            };
        },
    };

    return (
        <Area {...config} />
    );
};

export default ChartArea;