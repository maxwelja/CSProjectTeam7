import React, { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import Details from './Details';

export default function GetBtn({btnLabel, collection, input=false}) {
    if (input == "true") {
        input = true;
    }

    const link = `http://localhost:4000/api/${collection}/`;
    const modalTitle = collection.toUpperCase();
    const [res, setRes] = useState(null);
    const [field, setField] = useState('');
    const [showModal, setShowModal] = useState(false);
  
    const handleClose = () => {
      setShowModal(false);
    };

    const handleShow = () => {
      setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("URL:", link+field, "Field:", field);
            console.log("GETTING")
            const response = await axios.get(link+field);
            setRes(Array.isArray(response.data) ? response.data : [response.data]);
            handleShow();
        } catch(error) {
            console.log('error: ', error);
        };
    }

    const handleChange = (e) => {
        setField(e.target.value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="ID">
                    {input && <Form.Control
                    type="text"
                    placeholder="Enter ID"
                    value={field}
                    onChange={handleChange}
                    />}
                </Form.Group>
                <Button type="submit"> { btnLabel } </Button>
            </Form>
            <div>
                <Modal
                    show={showModal}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        {res && res.length > 0 && res.map((entry) => (
                            <Details key={entry._id} entry={entry}/>
                        ))}
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>            
        </>
    );
};