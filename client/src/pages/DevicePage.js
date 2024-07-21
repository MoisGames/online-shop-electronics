import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id: 1, name: "Iphone 15 pro", price: 100000, rating: '5', img: 'https://store77.net/upload/w247/imageCache/918/356/9b9290cd1ffca9836e36174ca806d8f9.jpg'}
    const description = [
            {id: 1, title: 'Оперативная память', description: '5 Гб'},
            {id: 2, title: 'Камера', description: '40 Мп'},
            {id: 3, title: 'Процессор', description: 'A 3'},
            {id: 4, title: 'Кол-во ядер', description: '6 ядер'},
            {id: 5, title: 'Емкость аккумулятора', description: '6000 мА/ч'},
    ]

    return (
        <Container className='mt-3'>
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
                <Row className='d-flex justify-content-center flex-column align-items-center'>
                    <h2 className='d-flex justify-content-center'>
                        {device.name}
                    </h2>
                    <div
                        className='d-flex align-items-center justify-content-center'
                        style={{background: `url(${bigStar}) no-repeat center center`, width: 220, height: 220, backgroundSize: 'cover', fontSize: 64}}
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className='d-flex justify-content-around align-items-center'
                    style = {{width: 300, height: 300, fontSize: 32, border: '5px solid gray'}}
                >
                    <h3>
                        От {device.price} руб.
                    </h3>
                    <Button variant='outline-dark'>Добавить в корзину</Button>



                </Card>
            </Col>
            </Row>
            <h1 className='mt-4'>
                Характеристики
            </h1>
            <Row className='d-flex flex-column m-3'>
                {description.map((info, index) => 
                    <Row 
                    key = {description.id}
                    style = {{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}} >
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;