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
                    <h3 className="yellow sub-title">Since 2007</h3>
                    <h1 className="">CV. Sinar Media Sakti</h1>
                </div>
                </Container>
            </div>
    
      </>
    );
  };
  
  export default Header;