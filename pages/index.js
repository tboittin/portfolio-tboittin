import BaseLayout from "@/components/layout/BaseLayout";

import { Container, Row, Col, Button } from "reactstrap";

import Typed from "react-typed";

import { useGetUser } from "@/actions/user";
import { useState, useRef, useEffect } from "react";
import BasePage from "components/BasePage";
import Link from "next/link";
import { FlippingCard } from "components/homeComponents/FlippingCard";

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
              <Col xs="12" lg="6">
                <div className="hero-section">
                  <FlippingCard isFlipping={isFlipping} ROLES={ROLES}/>
                </div>
              </Col>
              <Col lg="6" xs="12" className="hero-welcome-wrapper">
                <div className="hero-welcome-text h-50">
                  <Typed
                    strings={INTRO}
                    typeSpeed={70}
                    loopCount={1}
                    className="self-typed"
                    cursorChar="|"
                  ></Typed>
                </div>
                <div className="hero-welcome-bio">
                  <h1>Let's take a look at my work.</h1>
                  <Link href="/portfolios">
                    <Button
                      size="lg"
                      className="mt-3 mb-5 button-index"
                      block
                    >
                      Portfolio
                    </Button>
                  </Link>
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
