import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import Home2 from "./Home2";
import homeLogo from "../../assets/Home_asthetic.png";


export default function Home() {
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
                I'M
                <strong className="main-name"> SAMEER BALKAWADE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: 26 }}><span className="purple">
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Backend Developer",
                  "Frontend Dveloper",
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
    </section>
  );
}
