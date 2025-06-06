import Spinner from 'react-bootstrap/Spinner';
import './index.css'

function Spinners() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '120px' }}>
    <Spinner animation="border" role="status">
    </Spinner>
  </div>
  );
}

export default Spinners;