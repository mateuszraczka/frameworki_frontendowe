import Card from "react-bootstrap/Card";
import RatingBar from "./RatingBar";
import { ButtonGroup, Button } from "react-bootstrap";
import { useState } from "react";
import EditPersonalInfo from "./EditPersonalInfo";

function PersonalInfo({ id, name, birth, eyes, rating, dispatch }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = (updatedData) => {
    dispatch({
      type: "edit",
      id,
      newData: updatedData,
    });
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    isEdit ? <EditPersonalInfo initialData={{ name, birth, eyes }} onSave={handleSave} onCancel={handleCancel}></EditPersonalInfo> :
    <Card style={{ width: "20rem", minHeight: "20rem" }}>
      <Card.Body>
        <Card.Title>
          {id}. {name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Personal info:
        </Card.Subtitle>
        <Card.Text>
          Eye color: {eyes}
          <br/>
          Birth date: {birth}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="mt-auto d-flex flex-column justify-content-end" style={{height: "6rem"}}>
        <div className="d-flex justify-content-center mb-auto">
          <RatingBar rate={rating}></RatingBar>
        </div>
        <ButtonGroup>
          <Button variant="danger" onClick={(e) => dispatch({
            type: "delete",
            id,
          })}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="warning" onClick={(e) => dispatch({
            type: "rate",
            id,
            rating: (rating + 1) % 11
          })}
          >
            Rate
          </Button>
        </ButtonGroup>
        </Card.Footer>
    </Card>
  );
}

export default PersonalInfo;
