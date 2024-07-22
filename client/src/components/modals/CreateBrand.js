import React, { useContext } from 'react';
import { Modal, Button, Dropdown, ModalFooter, DropdownToggle } from 'react-bootstrap';
import { Context } from '../..';


const CreateBrand = ({show, onHide}) => {
    const {device} = useContext(Context)

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
      <Dropdown>
             <DropdownToggle>Выберите бренд</DropdownToggle>
             <Dropdown.Menu>
                 {device.brands.map( brand =>
                     <Dropdown.Item key = {brand.id}>
                         {brand.name}
                     </Dropdown.Item>
                 )}
             </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
      <ModalFooter>
            <Button variant='outline-danger' className='m-2 '>Закрыть</Button>
            <Button variant='outline-success' className='m-2 '>Добавить</Button>
      </ModalFooter>
    </Modal>
    );
};

export default CreateBrand;