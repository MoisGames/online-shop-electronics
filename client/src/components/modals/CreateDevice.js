import React, { useContext, useState } from 'react';
import { Modal, Button, ModalFooter, Dropdown, DropdownToggle, Form, Row, Col } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown>
                    <DropdownToggle>Выберите тип</DropdownToggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item key={type.id}>
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle className='mt-2'>Выберите бренд</DropdownToggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item key={brand.id}>
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className='mt-2'
                    placeholder='Введите название устройства'
                />
                <Form.Control
                    className='mt-2'
                    placeholder='Введите стоимость устройства'
                    type='number'
                />
                <Form.Control
                    className='mt-2'
                    type='file'
                />
                <hr />
                <Button
                    variant='outline-dark'
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i =>
                    <Row 
                    className='m-4'
                    key={i.number}
                    >
                        <Col md={4}>
                            <Form.Control
                                placeholder='Введите название характеристики'
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                placeholder='Введите описание характеристики'
                            />
                        </Col>
                        <Col md={4}>
                            <Button
                            variant='outline-danger'
                            onClick={() => removeInfo(i.number)}
                            >
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                )
                }
            </Modal.Body>
            <ModalFooter>
                <Button
                    variant='outline-danger'
                    className='m-2 '
                    onClick={onHide}
                >Закрыть</Button>
                <Button
                    variant='outline-success'
                    className='m-2 '
                    onClick={onHide}
                >Добавить</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateDevice;