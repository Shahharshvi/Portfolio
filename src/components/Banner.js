import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import computer1 from "../assets/img/project-image/computer1.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [  "Web Developer", "Data Science" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Harshvi `} <br />
                 <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Data Science" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I have a keen interest in AI/ML, data science, and web development and I am dedicated to furthering my skills and knowledge in these domains. I am enthusiastic about leveraging these technologies to solve complex problems and create impactful solutions.</p>
                  <button onClick={() => console.log('connect')}>Resume <a href="https://drive.google.com/drive/folders/1EK3hs1DuGrS8Zgciy79jEU4LhbbLSCKy"><ArrowRightCircle size={25} /></a></button>
                  
              </div>}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}> */}
            {/* <TrackVisibility> */}
              {/* {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={computer1} alt="Header Img"/>
                </div>} */}
            {/* </TrackVisibility> */}
          {/* </Col> */}
          {/* <Col xs={12} md={6} xl={5}>
  <div>
    <img src={computer1} alt="Header Img"/>
  </div>
</Col> */}
<Col xs={12} md={6} xl={5}>
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "" : ""}>
        <img src={headerImg} alt="Header Img"/>
      </div>}
  </TrackVisibility>
</Col>
        </Row>
      </Container>
    </section>
  )
}
