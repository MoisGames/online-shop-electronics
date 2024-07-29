import React, { useState } from 'react';
import { Button, Form, Modal, ModalFooter } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';


const CreateType = ({show, onHide}) => {
  const [value,setValue] = useState('')

  const addType = () => {
      createType({name: value}).then(data => {
        setValue('')
        onHide()
      });
  }
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
                value={value}
                onChange={e => setValue(e.target.value)} 
                placeholder='Введите название типа...'
            />
            </Form>
      </Modal.Body>
      <ModalFooter>
            <Button 
                variant='outline-danger' 
                className='m-2'
                onClick={onHide}
                >Закрыть</Button>
            <Button 
                variant='outline-success' 
                className='m-2'
                onClick={addType}
                >Добавить</Button>
      </ModalFooter>
    </Modal>
    );
};

export default CreateType;