import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const jobFavorites = useSelector((state) => state.jobFavorites.content);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1} className="text-end">
        {jobFavorites.some((element) => element._id === data._id) ? (
          <Button
            variant="danger"
            onClick={() => {
              dispatch({ type: "REMOVE_TO_FAVORITE", payload: data });
              console.log(data);
            }}
          >
            <i className="bi bi-x-lg"></i>
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => {
              dispatch({ type: "ADD_TO_FAVORITE", payload: data });
            }}
          >
            <i className="bi bi-heart"></i>
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
