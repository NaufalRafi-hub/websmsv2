import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import './header.css';
// import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
      <>
            <div className="wrap-head">
                {/* <video src={videoBg} autoPlay loop muted id="slide-bg"/> */}
            <Container>
                <div className="container-head">
                    <h1 className="sub-title"><b>ONE-STOP WORK</b>SHOP <br></br>
                        <span className="yellow">
                        <b>SOLUTIONS </b>
                        </span>
                    </h1>
                    <h3 className="">CV. SINAR MEDIA SAKTI</h3>
                </div>
                </Container>
            </div>
    
      </>
    );
  };
  
  export default Header;