// eslint-disable-next-line
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.scss";

function TargetHigh() {
    return (
 
        <Row >

           <Col className="infoText peak" >

                <p>Lahitulevikus</p>

               <p><b>TIPUTUNDE EI OLE</b></p>

                <p >
                   Kui soovite tarbida  <span> Odavad tunnid</span> ja leiate selleks parima aja.
                 </p>


                <p className="peakHoursDescription">Soovitame tiptundide ajal vahendada elektri tarbimist, et aidata kaasa Euroopa uhisele eesmärgile alandada tiputundidel -5% elektri tarbmist ja vahendada maagaasi . <a target="_blank" rel="noreferrer" href="https://www.consilium.europa.eu/et/infographics/eu-measures-to-cut-down-energy-bills/">Loe lahemalt</a></p>
             </Col>

        </Row>

       
    );
}

export default TargetHigh;