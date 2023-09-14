import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PreferButton = () => {
  return (
    <Container className="mt-5 text-end">
      <Link to="/prefer-list">
        <button type="button" className="btn btn-primary position-relative">
          Favorites
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0<span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </Link>
    </Container>
  );
};
export default PreferButton;
