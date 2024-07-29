import React, {useState } from 'react';
import { Modal, Button,ModalFooter , Form} from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';
import BrandBar from '../BrandBar';


const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addBrand = () => {
      createBrand({name: value}).then(data => {
        setValue('')
        onHide()
      })
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
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Control
                value={value}
                onChange={e => setValue(e.target.value)} 
                placeholder='Введите название бренда...'
            />
            </Form>
      </Modal.Body>
      <ModalFooter>
            <Button 
            onClick={onHide}
            variant='outline-danger' 
            className='m-2 '
            >Закрыть</Button>
            <Button 
            onClick={addBrand}
            variant='outline-success' 
            className='m-2 '
            >Добавить</Button>
      </ModalFooter>
    </Modal>
    );
};

export default CreateBrand;