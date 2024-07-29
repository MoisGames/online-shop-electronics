import React, { useContext, useEffect } from 'react';
import { Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';

const Shop = observer ( () => {

    const {device} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    },[])

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
});

export default Shop;