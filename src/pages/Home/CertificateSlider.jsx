import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

const certificates = [
  {
    title: "Python Data Structures",
    link: "https://sameer2831.github.io/portfolio/Certifications/Python-DS-certificate.pdf",
  },
  {
    title: "Image Classification with CNNs",
    link: "https://sameer2831.github.io/portfolio/Certifications/CNN-image-Classification-certificate.pdf",
  },
  {
    title: "Linear Regression with NumPy and Python",
    link: "https://sameer2831.github.io/portfolio/Certifications/Linear-Regression-with-NumPy-and-Python.pdf",
  },
  {
    title: "Python to Access Web Data",
    link: "https://sameer2831.github.io/portfolio/Certifications/Python-to-Access-Web-Data.pdf",
  },
];

function CertificateSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {certificates.map((cert, index) => (
        <div key={index} style={{ padding: "15px" }}>
          <Card
            className="shadow-sm"
            style={{
              borderRadius: "12px",
              background: "linear-gradient(135deg,rgb(152, 149, 152),rgb(54, 53, 54))",
              color: "white",
              padding: "20px",
              minHeight: "170px",
              transition: "transform 0.3s ease",
              marginLeft: "10px"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                
                {cert.title}
              </Card.Title>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#bb86fc", textDecoration: "underline" }}
              >
                View Certificate
                <FaFilePdf style={{ color: "#e63946", marginRight: "10px" }} />
              </a>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
  );
}

export default CertificateSlider;
