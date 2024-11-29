import { useContext, useState } from "react";
import { Form, Card, Button, ButtonGroup } from "react-bootstrap";
import AppContext from "../contexts/AppContext";

function CreatePersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    eyes: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState([]);
  const {dispatch} = useContext(AppContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const name = data.get("name");
    const isForenameUpperCase = name.slice(0,1) !== title.slice(0,1).toUpperCase();
    const isSurname = name.split().length > 1 ? true : false;

    setErrors([]);

    if(!isForenameUpperCase){
        setErrors([...errors, "Forename's first letter must be in uppercase"]);
    }
    if(!isSurname){
        setErrors([...errors, "Please provide your surname"]);
    }

    await new Promise(res => setTimeout(res, 1000)); // symulacja fetch

    dispatch(
        {
            type: "add",
            data: formData
        }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card style={{ width: "30rem", minHeight: "20rem" }}>
      <Card.Body>
        <Card.Title>Create form</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Please fill all mandatory fields *
        </Card.Subtitle>
        <Form>
          <Form.Label>
            Name*:
            <Form.Control
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </Form.Label>
          <Form.Label>
            Birth date*:
            <Form.Control
              type="date"
              name="birth"
              required
              value={formData.birth}
              onChange={handleInputChange}
              placeholder="Birth Date"
              className="mt-2"
            />
          </Form.Label>
          <Form.Label>
            Eye color*:
            <Form.Control
              type="text"
              name="eyes"
              required
              value={formData.eyes}
              onChange={handleInputChange}
              placeholder="Eye Color"
              className="mt-2"
            />
          </Form.Label>
        </Form>
      </Card.Body>
      <Card.Footer
        className="mt-auto d-flex flex-column justify-content-end"
        style={{ height: "6rem" }}
      >
        <ButtonGroup>
          <Button variant="success" onClick={(e) => onSubmit(e)}>
            Add
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}

export default CreatePersonalInfo;
