import { useEffect } from "react"
import "./App.scss";
import Container from 'react-bootstrap/Container';
import Body from "./Body"
import Footer from "./Footer"
import Head from "./Head"
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setActiveHour, setShowSideBar } from './services';



function ElektricPrice() {

    const params = useParams();

    const dispatch = useDispatch();

    const handleCloseSideBar = () => dispatch(setShowSideBar(false));
    const handleOpenSideBar = () => dispatch( setShowSideBar(true));

    useEffect(() => {
        if (params.hours) dispatch(setActiveHour(+params.hours));
    }, [dispatch, params.hours]);

    return (


        <Container >
            <Loading />
            <Head handleClose={handleCloseSideBar} handleOpenSideBar={handleOpenSideBar} />
            <Body />
            <Footer style={{ backgroundColor: "#f3f5fd" }} />
            <LeftSideBar handleClose={handleCloseSideBar} />
            <ErrorModal  />

        </Container>

    );
}

export default ElektricPrice;
