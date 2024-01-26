import { useState } from "react"
import "./App.scss";
import Container from 'react-bootstrap/Container';
// import { Container } from "react-bootstrap";
import Body from "./Body"
import Footer from "./Footer"
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head"


function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [tillMorning, setTillMorning] = useState(0);
  const [activeHour, setActiveHour] = useState();
  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice} />
      <Body activeHour={activeHour} />
      <Footer activeHour={activeHour} setActiveHour={setActiveHour} setActivePrice={setActivePrice} activePrice={activePrice} tillMorning={tillMorning} setTillMorning={setTillMorning} style={{ backgroundColor: "#f3f5fd" }} />
    </Container>
  );
}

export default App;
