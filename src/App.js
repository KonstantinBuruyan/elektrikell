import {useState} from  "react"
import "./App.scss";
import Container from 'react-bootstrap/Container';
// import { Container } from "react-bootstrap";
import Body from "./Body"
import Footer from "./Footer"
import Head, {DEFAULT_ACTIVE_BUTTON} from "./Head"


function App() {
    const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
    const [tillMorning, setTillMorning] = useState(0);
  return (
  <Container>
    <Head activePrice={activePrice} setActivePrice={setActivePrice}/>
    <Body/>
          <Footer activePrice={activePrice} tillMorning={tillMorning} setTillMorning={setTillMorning}  style={{backgroundColor: "#f3f5fd"}}/>
  </Container>
  );
}

export default App;
