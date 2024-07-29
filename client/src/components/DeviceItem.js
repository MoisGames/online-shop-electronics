import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import smallStar from '../assets/small_star.svg'
import { useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from '../utils/consts'

const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col 
        md = {3} 
        className='mt-3' 
        onClick={() => history(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card style={{width: 150, cursor: 'pointer'}} border='light'>
                <Image width = {150} height = {150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='d-flex justify-content-between align-items-center mt-1 text-black-50'>
                    <div>Samsung...</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width = {15} height = {15} src = {smallStar}/>
                    </div>
            </div>
            <div style = {{fontSize: 20}}>{device.name}</div>
            <div style = {{fontSize: 25}}>{new Intl.NumberFormat('ru-RU').format(device.price)} руб.</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;