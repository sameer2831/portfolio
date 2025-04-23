import React,{ useState } from 'react';
import { ReactTyped } from 'react-typed';
import { Container, Row, Col,Modal, Button } from "react-bootstrap";
import Particle from "../../components/Particle";
import Home2 from "./Home2";
import homeLogo from "../../assets/Home_asthetic.png";
import resume from "../../assets/resume.pdf";
import CertificateSlider from './CertificateSlider';


export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const handleClose = () => setShowResume(false);
  const handleShow = () => setShowResume(true);

  const handleCloseCertifications = () => setShowCertifications(false);
  const handleShowCertifications = () => setShowCertifications(true);

  return (
    <section>
       <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> SAMEER BALKAWADE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: 26 }}><span className="purple">
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                  "Mobile Application Developer",
                  "Cloud DevOps Enthusiast",
                  "AI & Data Science Explorer",
                  ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-xl font-semibold mb-6"
              />
              </span>
              </div>
              <div style={{ padding: 50,  fontSize: 16 }}>
                <Button onClick={handleShow} variant="primary" className="me-3" style={{ fontSize: '1.1rem', padding: '10px 20px' }}>
                  View Resume
                </Button>

                <Button onClick={handleShowCertifications} variant="secondary" className="me-3" style={{ fontSize: '1.1rem', padding: '10px 20px' }}>
                  View Certifications
                </Button>
              </div>  
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        </Container>
        <Home2 />
        <Modal
          show={showResume}
          onHide={handleClose}
          size="lg"
          centered
          dialogClassName="resume-modal"
          contentClassName="resume-modal-content"
          animation
        >
          <Modal.Header closeButton className="border-0 px-4 pt-4 pb-2">
            <Modal.Title className="w-100 text-center" style={{ fontWeight: '600', fontSize: '1.6rem' }}>
              📄 My Resume
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ height: '80vh', padding: 0 }}>
            <div className="resume-iframe-container">
              <iframe
                src={resume}
                title="Resume"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
          </Modal.Body>

          <Modal.Footer className="border-0 d-flex justify-content-center pb-4">
            <Button
              variant="outline-primary"
              onClick={handleClose}
              style={{
                borderRadius: '20px',
                padding: '10px 24px',
                fontWeight: '500',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Certifications Modal */}
      <Modal
        show={showCertifications}
        onHide={handleCloseCertifications}
        size="lg"
        centered
        animation
      >
        <Modal.Header closeButton className="border-0 px-4 pt-4 pb-2">
          <Modal.Title className="w-100 text-center" style={{ fontWeight: '600', fontSize: '1.6rem' }}>
            🏅 My Certifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ul style={{ fontSize: '1.1rem', lineHeight: '2' }}>
          <li>
            <a 
              href="https://sameer2831.github.io/portfolio-site/certificates/Python-DS-certificate.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Python Data Structures
            </a>
          </li>
            <li>
              <a 
              href="https://sameer2831.github.io/portfolio-site/certificates/CNN-image-Classification-certificate.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >Image Classification with CNNs</a></li>
            <li>
            <a 
              href="https://sameer2831.github.io/portfolio-site/certificates/Linear-Regression-with-NumPy-and-Python.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >Linear Regression with NumPy and Python</a></li>
            <li>
            <a 
              href="https://sameer2831.github.io/portfolio-site/certificates/Python-to-Access-Web-Data.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >Python to Access Web Data</a></li>
          </ul> */}
          <CertificateSlider />
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center pb-4">
          <Button
            variant="outline-success"
            onClick={handleCloseCertifications}
            style={{
              borderRadius: '20px',
              padding: '10px 24px',
              fontWeight: '500',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </section>
  );
}
