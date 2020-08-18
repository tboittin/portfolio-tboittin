import BaseLayout from "@/components/layout/BaseLayout";

import { Container, Row, Col } from "reactstrap";

import Typed from "react-typed";

import { useGetUser } from "@/actions/user";
import { useState, useRef, useEffect } from "react";
import BasePage from "components/BasePage";

const INTRO = [
  "Welcome to Thomas Boittin's website ! I put here my projects and some cool stuff !",
];
const ROLES = [
  "React.js dev",
  "Next.js dev",
  "Fast Learner",
  "Web enthousiast",
  "Casual Gamer",
  "Nerd",
];

const Index = () => {
  const { data, loading } = useGetUser();
  const [isFlipping, setisFlipping] = useState(false);
  const flipInterval = useRef();

  useEffect(() => {
    startAnimation();
    return () => flipInterval.current && clearInterval(flipInterval.current);
  }, []);

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setisFlipping((prevFlipping) => !prevFlipping);
    }, 30000);
  };

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className={"cover" + (isFlipping ? " cover-orange" : " cover-blue")}
    >
      <BasePage indexPage title="Home">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div
                    className={`flipper` + (isFlipping ? " isFlipping" : "")}
                  >
                    <div className="front">
                      <div className="image" className="image image-1">
                        <div className="hero-section-content">
                          {/* <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div> */}
                          <h2> I'm a </h2>
                          <Typed
                            loop
                            strings={ROLES}
                            typeSpeed={70}
                            backSpeed={70}
                            backDelay={1000}
                            loopCount={0}
                            className="self-typed"
                            showCursor
                            cursorChar="|"
                          ></Typed>
                        </div>
                      </div>

                      {/* TODO make this card as components */}

                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="image" className="image image-2">
                        <div className="hero-section-content">
                          {/* <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div> */}
                          <h2> I'm a </h2>
                          <Typed
                            loop
                            strings={ROLES}
                            typeSpeed={70}
                            backSpeed={70}
                            backDelay={1000}
                            loopCount={0}
                            className="self-typed"
                            showCursor
                            cursorChar="|"
                          ></Typed>
                        </div>
                      </div>
                      <div className="shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  {/* <h1>
                    Welcome to the portfolio website of Filip Jerga. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1> */}
                  <Typed
                    strings={INTRO}
                    typeSpeed={70}
                    loopCount={1}
                    className="self-typed"
                    cursorChar="|"
                  ></Typed>
                </div>
                {/* <Typed
                  loop
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                ></Typed> */}
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default Index;
