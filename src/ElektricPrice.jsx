import { useState, useEffect } from "react"
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
import { setActiveHour } from './services';



function ElektricPrice() {

    const params = useParams();

    const dispatch = useDispatch();


    const [tillMorning, setTillMorning] = useState(0);

    const [errorMessage, setErrorMessage] = useState(null);
    const [showSideBar, setShowSideBar] = useState(false);
    const [bestUntill, setBestUntill] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    const handleCloseSideBar = () => setShowSideBar(false);
    const handleOpenSideBar = () => setShowSideBar(true);

    useEffect(() => {
        if (params.hours) dispatch(setActiveHour(+params.hours));
    }, [dispatch, params.hours]);

    return (


        <Container >
            <Loading dataLoaded={dataLoaded} />
            <Head handleClose={handleCloseSideBar} handleOpenSideBar={handleOpenSideBar} setErrorMessage={setErrorMessage} />
            <Body setErrorMessage={setErrorMessage} setBestUntill={setBestUntill} setDataLoaded={setDataLoaded} />
            <Footer tillMorning={tillMorning} setTillMorning={setTillMorning} style={{ backgroundColor: "#f3f5fd" }} bestUntill={bestUntill} />
            <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} />


            <ErrorModal show={!!errorMessage} handleClose={() => setErrorMessage(null)} errorMessage={errorMessage} />

        </Container>

    );
}

export default ElektricPrice;
