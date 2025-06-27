import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import shuttle from "../../assets/shuttle.jpeg";
import reddit from "../../assets/reddit.jpg";
import dcgan from "../../assets/dcgan.png";
import fest from "../../assets/fest.jpeg";
import portfolio from "../../assets/portfolio.jpeg"
import PublicationCard from "./PublicationCard";
import digitsNN from "../../assets/digitsNN.png"
import digitsCNN from "../../assets/digitsCNN.png"
import airbnb from "../../assets/airbnb.jpg"
import uber from "../../assets/uber.jpg"
import wealthmitra from "../../assets/wealthmitra.png"
import tripbin from "../../assets/tripbin.png"
import basketballSim from "../../assets/prime_logo.png"
function Projects() {
  const [filter, setFilter] = useState("All");

  const allProjects = [
    {
      imgPath: basketballSim,
      title: "Basketball PRIME – NBA Game Simulator",
      description: "Built a full-stack NBA match simulator using React and Node.js, featuring 5v5 lineup battles powered by real stats. Scraped player data (PER, USG%, TS%, clutch stats) from Basketball Reference using Python and BeautifulSoup. Incorporated momentum, fatigue, and game flow logic to simulate realistic outcomes with animated UI and demo video.",
      ghLink: "https://github.com/sameer2831/Basketball-PRIME-Game-Simulator",
      demoLink:"https://sameer2831.github.io/Basketball-PRIME-Game-Simulator/",
      category: ["Full Stack","Web Development"],
    },
    {imgPath:wealthmitra,
      title:"WealthMitra – Financial Management System",
      description:"Built a full-stack(.Net React) financial management platform to track and analyze personal income and expenses. Developed REST APIs with Node.js, implemented user-specific dashboards in React.js, and integrated Microsoft SQL Server for secure data storage. Enabled insightful visualizations and improved financial planning for users.",
      ghLink:"https://github.com/sameer2831/FinancialManagementSystem",
      category: "Full Stack",
      },
      {
    imgPath: shuttle,
    title: "Shuttle Ride Management System",
    description: "MERN stack app with JWT-based auth and RBAC. Optimized MongoDB schema with factory/repository patterns, reducing query time by 60%. Boosted UI responsiveness by 40% using WebSockets and REST APIs.",
    ghLink: "#",
    category: "Full Stack",
  },
  {
    imgPath: tripbin,
    title: "TripBin – Travel Itinerary Planner (Flutter)",
    description: "Developed a cross-platform Flutter app to manage travel plans, create dynamic itineraries, and store trip details using Firebase. Implemented responsive UI with Material Design, integrated Google Maps for route visualization, and enabled real-time updates across Android and iOS platforms.",
    ghLink: "https://github.com/sameer2831/TripBin_APP",
    category: "Mobile App",
  },
  {
    imgPath: reddit,
    title: "Reddit WallStreetBets Sentiment Analysis",
    description: "Performed sentiment analysis using NLP tools like Vader, GloVe, LSTM on WallStreetBets posts. Visualized results using Seaborn & Matplotlib, enhancing sentiment classification accuracy by 15%.",
    ghLink: "https://github.com/sameer2831/Reddit-WallStreetBets-Sentiment-Analysis",
    category: "Data Science",
  },
    {
    imgPath: fest,
    title:"Android App for College Fest",
    description:"Built an Android app for online fest registration using Firebase and REST APIs. Integrated Google Maps and animation libraries, boosting engagement by 20%.",
    ghLink:"https://github.com/sameer2831/Ashwamedh",
    category: "Mobile App",
  },
  {
    imgPath: dcgan,
    title: "Skin Lesions Data Augmentation using DCGAN",
    description: "Developed a DCGAN to synthetically generate skin lesion images, increasing dataset size by 72% and CNN model accuracy by 9%. Supported research in dermatology and medical imaging.",
    ghLink: "https://github.com/sameer2831/DCGAN_skin_lession",
    category: "ML/DL",
  },
  {
    imgPath: digitsNN,
    title:"Handwritten Digit Recognition – Neural Network",
    description:"Built a digit recognition model using a basic neural network trained on Kaggle's handwritten digit dataset. Achieved over 90% accuracy, showcasing foundational deep learning concepts.",
    ghLink:"https://github.com/sameer2831/Handwritten_digit_recognition_NeuralNetwork",
    category: "ML/DL",    
  },
  {
    imgPath: digitsCNN,
    title:"Handwritten Digit Recognition – CNN",
    description:"Implemented a CNN-based classifier on the same dataset, improving accuracy to 98.6%. Leveraged Conv2D, MaxPooling, and Dropout layers for better generalization and performance.",
    ghLink:"https://github.com/sameer2831/CNN_digit_recogonizer",
    category: "ML/DL", 
  },
  {
    imgPath: portfolio,
    title:"Personal Developer Portfolio",
    description:"My personal portfolio built with React, Tailwind CSS, and GitHub Pages. Includes responsive design, routing, project showcase, and theme animations.",
    ghLink:"https://github.com/sameer2831/portfolio",
    demoLink:"https://sameer2831.github.io/portfolio",
    category: "Web Development", 
  },
  {
    imgPath: uber,
    title: "Uber Ride Data Analysis",
    description: "Performed data wrangling and time-series analysis on Uber pickup data using Python, Pandas, and Matplotlib. Visualized ride distributions by hour, day, and location to uncover peak demand periods.",
    ghLink: "https://github.com/sameer2831/DATA-ANALYSIS/tree/main/Uber%20Rides%20Data%20Analysis",
    category: "Data Science",
  },
  {
     imgPath: airbnb,  
     title:"NY AirBnB Data Analysis",
     description:"Exploratory data analysis and visualization of NYC AirBnB listings using Python, Pandas, and Seaborn. Uncovered insights on pricing trends, location patterns, and host behavior.",
     ghLink:"https://github.com/sameer2831/DATA-ANALYSIS/tree/main/NY%20AirBnB%20Analysis",
     category: "Data Science",  
  }
   
  ];
  const filteredProjects =
  filter === "All" ? allProjects : allProjects.filter((project) => project.category === filter);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Technical <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few technical projects I've worked on recently.
        </p>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          {["All", "Full Stack", "Mobile App", "Data Science", "ML/DL","Web Development"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              style={{
                margin: "5px",
                padding: "10px 20px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: filter === cat ? "purple" : "#444",
                color: "white",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink ? project.demoLink : undefined}
              />
            </Col>
          ))}
          
        </Row>
        <Container fluid className="publication-section">
        <Container>
          <h1 className="project-heading">
            Research <strong className="purple">Publications</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
            <Col md={6} className="project-card">
              <PublicationCard
                title="Skin Lesion Image Augmentation using DCGAN"
                journal="IRJET, Volume 8, Issue 7, July 2021"
                link="https://www.irjet.net/archives/V8/i7/IRJET-V8I7142.pdf"
              />
            </Col>

            <Col md={6} className="project-card">
              <PublicationCard
                title="Data Augmentation on Skin Lesion Image Data Using GAN for Increased CNN Performance"
                journal="IRJET, Volume 8, Issue 5, May 2021"
                link="https://www.irjet.net/archives/V8/i5/IRJET-V8I5328.pdf"
              />
            </Col>
          </Row>

        </Container>
      </Container>

      </Container>
    </Container>
  );
}

export default Projects;
