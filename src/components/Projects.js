import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import tableau from "../assets/img/project-image/tableau.png";
import webscraping from "../assets/img/project-image/webscraping.png";
import finance from "../assets/img/project-image/finance.png";
import powerbi from "../assets/img/project-image/powerbi.png";
import ecommerce from "../assets/img/project-image/ecommerce.png";
import movie_prediction from "../assets/img/project-image/movie_prediction.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Global Terrorism Analysis:",
      description: "Powerbi Project",
      imgUrl: powerbi,
      link:"https://app.powerbi.com/groups/me/reports/ccb7d019-438a-45bf-8f23-6a956fb0856b?ctid=d1f14348-f1b5-4a09-ac99-7ebf213cbc81&pbi_source=linkShare",
      tabKey: "first",
    },
    {
      title: "Pricing of House Analysis Dashboard:",
      description: "Tableau Project",
      imgUrl: tableau,
      link:"https://public.tableau.com/app/profile/harshvi.shah/viz/Pricing_of_house_project/Dashboard1?publish=yes",
      tabKey: "first",
    },
    {
      title: "Automating WebScraping of Flipcart Website:",
      description: "Web Scraping project",
      imgUrl: webscraping,
      link:"https://github.com/Shahharshvi/DS-ML/blob/main/Web%20scraping/Automating_WebScraping_of_Flipcart_Website_.ipynb",
      tabKey: "first",
    },
    {
      title: "Ecommerce Website for selling shoes",
      description: "Ecommerce Website using django",
      imgUrl: ecommerce,
      link:"https://github.com/Shahharshvi/Django-projects/tree/main/ecommerce",
      tabKey: "second",
    },
    {
      title: "Finance tracker",
      description: "Finance tracker using vanilla javascript",
      imgUrl: finance,
      link:"https://github.com/Shahharshvi/React_javascript-projects/tree/main/financeTracker",
      tabKey: "second",
    },
    {
      title: "Movie prediction",
      description: "A model for movie recommendation according to user input.",
      imgUrl: movie_prediction,
      link:"https://github.com/Shttps://github.com/Shahharshvi/DS-ML/blob/main/Movie_recommendation.ipynbhahharshvi/React_javascript-projects/tree/main/financeTracker",
      tabKey: "second",
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
                <p>Browse Through My Project Portfolio.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
  <Tab.Pane eventKey="second">
    <Row>
      {projects
        .filter(project => project.tabKey === "second") // Filter projects for the second tab
        .map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </Row>
  </Tab.Pane>
  {/* Add more Tab.Pane components for other tabs */}
{/* </Tab.Content> */}







{/* 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                               
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                               
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third">
                      <p>You can view all these projects on my github repository....
                      <button onClick={() => console.log('connect')}><a href="https://github.com/Shahharshvi"><ArrowRightCircle size={25} /></a></button>
                      </p>
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
