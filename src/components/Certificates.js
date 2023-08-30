import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import colorSharp2 from "../assets/img/color-sharp2.png";
import certificate1 from "../assets/img/project-image/certificate1.png"
import certificate2 from "../assets/img/project-image/certificate2.png"
import certificate3 from "../assets/img/project-image/certificate3.png"
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {

  const projects = [
    {
      title: "Data Analytics and data visualization:",
    //   description: "Tableau Project",
      imgUrl: certificate1,
      link:"https://drive.google.com/drive/folders/1RPHf3pZoEHFIxuvD3u1h3ATU6teOgz4K",
      tabKey: "first",
    },
    {
      title: "Introduction to NLP",
      description: "Web Scraping project",
      imgUrl: certificate2,
      link:"https://drive.google.com/drive/folders/1RPHf3pZoEHFIxuvD3u1h3ATU6teOgz4K",
      tabKey: "first",
    },
    {
      title: "NPTEL C programming course",
      description: "Ecommerce Website using django",
      imgUrl: certificate3,
      link:"https://drive.google.com/drive/folders/1RPHf3pZoEHFIxuvD3u1h3ATU6teOgz4K",
      tabKey: "first",
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
  <Tab.Pane eventKey="first">
    <Row>
      {projects
        .filter(project => project.tabKey === "first") // Filter projects for the first tab
        .map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </Row>
  </Tab.Pane>
  

                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
