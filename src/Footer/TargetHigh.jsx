import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.scss";

function TargetHigh() {
    return (
        <>
            <Row >
                <Col />
                <Col className="infoText peak" >

                    <p>Lähitulevikus</p>

                    <p><b>TIPUTUNDE EI OLE</b></p>

                    <p >
                        Kui soovite tarbida kõige mõistlikumal ajal, valige ülevalt <span style={{ color: "rgb(26, 178, 41)" }}> Odavad tunnid</span> ja leiate selleks parima aja.
                    </p>


                    <p className="peakHoursDescription">Soovitame tiptundide ajal vähendada elektri tarbimist, et aidata kaasa Euroopa ühisele eesmärgile alandada tiputundidel -5% elektri tarbmist ja vähendada maagaasi nõudlust. <a target="_blank" href="https://www.consilium.europa.eu/et/infographics/eu-measures-to-cut-down-energy-bills/">Loe lähemalt</a></p>
                </Col>
                <Col />
            </Row>

        </>
    );
}

export default TargetHigh;