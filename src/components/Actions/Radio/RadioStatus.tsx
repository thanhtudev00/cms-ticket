import React from 'react';
import { Radio } from 'antd';

const RadioStatus = () => { 
    const [value, setValue] = React.useState(1);

    const radioOnChange = (e: any) => { 
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={radioOnChange}>
            <Radio value={1}>Tất cả</Radio>
            <Radio value={2}>Đã sử dụng</Radio>
            <Radio value={3}>Chưa sử dụng</Radio>
            <Radio value={4}>Hết hạn</Radio>
        </Radio.Group>
    )
    
}

export default RadioStatus;