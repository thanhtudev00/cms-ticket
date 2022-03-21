import React from 'react';
import { useState } from 'react';
import { Checkbox, Row, Col } from 'antd';

// Check box cho cổng checkin
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5'];
const defaultCheckedList = ['Cổng 1'];

const CheckboxGateCheck = () => {
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(false);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.unchecked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            <Row>
                <Col span={10}>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Tất cả
                    </Checkbox>
                </Col>
                <Col style={{ marginTop: '10px' }}>
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                </Col>
            </Row>
        </>
    );
};