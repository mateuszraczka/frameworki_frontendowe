import { Link } from "react-router-dom";

function Lab4Page() {
  return (
    <div className="d-flex flex-column">
      <Link to="lab4/edit:id">Edit</Link>
      <Link to="lab4/create">Create</Link>
    </div>
  );
}

export default Lab4Page;
