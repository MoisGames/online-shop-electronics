import {observer} from 'mobx-react-lite'
import React, { useContext, useState } from 'react';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer (() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex mt-2' md={4} border="light">
            {device.brands.map(brand => 
                <Card
                    style={{width: 150, cursor: 'pointer'}}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    key={brand.id}
                    className='p-3 '
                    
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;