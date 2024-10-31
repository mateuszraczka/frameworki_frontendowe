import Card from "react-bootstrap/Card";

function PersonalInfo({ id, name, birth, eyes }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {id}. {name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Personal info:
        </Card.Subtitle>
        <Card.Text>
          Eye color: {eyes}
          Birth date: {birth}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonalInfo;
