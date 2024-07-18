import { observe } from 'mobx';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observe (() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex mt-2'>
            {device.brands.map(brand => 
                <Card
                    key={brand.id}
                    className='p-3'
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;