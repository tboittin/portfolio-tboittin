import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Row, Col, Button} from 'reactstrap'
import { useEffect } from "react";

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if(typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein'
    }

    return 'fadein';
  }

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page" title="About Me">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ` + createFadeInClass()}>Hello, Welcome</h1>
              <p className={`subsubTitle ` + createFadeInClass()}>
                Feel free to read this short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={``}>
              {/* TODO Change the description */}
              <p>
                Hi I'm Thomas Boittin, I am a React.js/Next.js front-end developer.
              </p>
              <p>
                I am an Agro-Economist Engineer who decided to learn and create web applications.
              </p>
              <p>
                I deciding to learn programing so I could create projects that emerge form my mind.
                Also, this career allowed me to work while travelling around the world.
              </p>
              <p>
                My most recent work is with the EPFL+ECAL Lab, I made a React.js user interface 
                in order to conduct a study on perception of Fake News.
              </p>
              <Button className="text-center w-100" href="http://www.epfl-ecal-lab.ch/work/trust-over-time-online-survey/" target="_blank">Have a look at this project !</Button>
            </div>
          </Col>
        </Row>
        ;
      </BasePage>
    </BaseLayout>
  );
};

export default About;
