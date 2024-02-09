import { useState, useEffect } from "react"
import "./App.scss";
import Container from 'react-bootstrap/Container';
import Body from "./Body"
import Footer from "./Footer"
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head"
import { getDefaultFrom, getDefaultUntil } from "./Utils/dates";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";
import { useParams } from "react-router-dom";


function ElektricPrice() {

    const params = useParams();

    const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
    const [tillMorning, setTillMorning] = useState(0);
    const [activeHour, setActiveHour] = useState(1);
    const [from, setFrom] = useState(getDefaultFrom());
    const [until, setUntil] = useState(getDefaultUntil());
    const [errorMessage, setErrorMessage] = useState(null);
    const [showSideBar, setShowSideBar] = useState(false);
    const [bestUntill, setBestUntill] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    const handleCloseSideBar = () => setShowSideBar(false);
    const handleOpenSideBar = () => setShowSideBar(true);

    useEffect(() => {
        if (params.hours) setActiveHour(+params.hours);
    }, [params]);

    return (


        <Container >
            <Loading dataLoaded={dataLoaded} />
            <Head activePrice={activePrice} setActivePrice={setActivePrice} handleClose={handleCloseSideBar} handleOpenSideBar={handleOpenSideBar} setErrorMessage={setErrorMessage} />
            <Body activeHour={activeHour} from={from} until={until} setErrorMessage={setErrorMessage} setBestUntill={setBestUntill} setDataLoaded={setDataLoaded} />
            <Footer activeHour={activeHour} setActiveHour={setActiveHour} setActivePrice={setActivePrice} activePrice={activePrice} tillMorning={tillMorning} setTillMorning={setTillMorning} style={{ backgroundColor: "#f3f5fd" }} bestUntill={bestUntill} />
            <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} from={from} until={until} setFrom={setFrom} setUntil={setUntil} />


            <ErrorModal show={!!errorMessage} handleClose={() => setErrorMessage(null)} errorMessage={errorMessage} />

        </Container>

    );
}

export default ElektricPrice;
