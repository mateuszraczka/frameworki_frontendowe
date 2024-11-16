// EditPersonalInfo.js
import React, { useState } from "react";
import { Form, ButtonGroup, Button, Card } from "react-bootstrap";

function EditPersonalInfo({ initialData, onSave, onCancel }) {
  const [editedData, setEditedData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <Card style={{ width: "20rem", minHeight: "20rem"}}>
      <Card.Body>
        <Card.Title>Edit form</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Currently working on: {initialData.name}
        </Card.Subtitle>
        <Form.Label>
        Name:
        <Form.Control
          type="text"
          name="name"
          value={editedData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        </Form.Label>
        <Form.Label>
        Birth date:
        <Form.Control
          type="date"
          name="birth"
          value={editedData.birth}
          onChange={handleInputChange}
          placeholder="Birth Date"
          className="mt-2"
        />
        </Form.Label>
        <Form.Label>
        Eye color:
        <Form.Control
          type="text"
          name="eyes"
          value={editedData.eyes}
          onChange={handleInputChange}
          placeholder="Eye Color"
          className="mt-2"
        />
        </Form.Label>
      </Card.Body>
      <Card.Footer className="mt-auto d-flex flex-column justify-content-end" style={{height: "6rem"}}>
        <ButtonGroup>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}

export default EditPersonalInfo;
