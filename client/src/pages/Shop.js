import React from 'react';
import { Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                <TypeBar />
                </Col>
                <Col md={9}>
                <BrandBar />
                <DeviceList />
                </Col>

            </Row>
        </Container>
    );
};

export default Shop;