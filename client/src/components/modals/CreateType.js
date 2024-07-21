import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const CreateType = (show, onHide) => {
    return (
        <Modal
            show = {show}
            onHide={onHide}
            size="lg"
            centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                placeholder='Введите название типа...'
            />
            <Button variant='outline-danger' className='m-2 '>Закрыть</Button>
            <Button variant='outline-success' className='m-2 '>Добавить</Button>
            </Form>
      </Modal.Body>
    </Modal>
    );
};

export default CreateType;