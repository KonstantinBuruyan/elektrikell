import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
function Loading() {

    const isDataLoaded = useSelector((state) => state.isDataLoaded.isDataLoaded);

    const visibilyty = () => {
        return isDataLoaded ? "collapse" : "text-center vh-100 align-items-center"
    }
    return (
        < >
            <Row className={visibilyty()}  >
                <div>
                    <Spinner   animation="border" role="status" />
                    <p className="fs-1 p-4 fw-semibold text-center">Loading...</p>
                </div>
            </Row>
        </>
    );
}

export default Loading;