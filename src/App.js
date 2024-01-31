import { useState } from "react"
import "./App.scss";
import Container from 'react-bootstrap/Container';
// import { Container } from "react-bootstrap";
import Body from "./Body"
import Footer from "./Footer"
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head"
import { getDefaultFrom, getDefaultUntil } from "./Utils/dates";
import LeftSideBar from "./LeftSideBar";


function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [tillMorning, setTillMorning] = useState(0);
  const [activeHour, setActiveHour] = useState();
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const [showSideBar, setShowSideBar] = useState(false);

  const handleCloseSideBar = () => setShowSideBar(false);
  const handleOpenSideBar = () => setShowSideBar(true);
  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice} handleClose={handleCloseSideBar} handleOpenSideBar={handleOpenSideBar} />
      <Body activeHour={activeHour} from={from} until={until} />
      <Footer activeHour={activeHour} setActiveHour={setActiveHour} setActivePrice={setActivePrice} activePrice={activePrice} tillMorning={tillMorning} setTillMorning={setTillMorning} style={{ backgroundColor: "#f3f5fd" }} />
      <LeftSideBar show={showSideBar} handleClose={handleCloseSideBar} from={from} until={until} setFrom={setFrom} setUntil={setUntil} />
    </Container>
  );
}

export default App;
