import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  CardImgOverlay,
  Container,
} from "reactstrap";
import { limitTextLength } from "helpers/functions";

export const PortfolioCard = ({ portfolio, children }) => (
  <Card className="portfolio-card">
    {!portfolio.image && (
      <>
        <CardBody>
          <Container className="px-0 h-50">
            <CardTitle className="portfolio-card-title">
              {limitTextLength(portfolio.title, 30)}
            </CardTitle>
            <CardText className="portfolio-card-text">
              {limitTextLength(portfolio.description, 100)}
            </CardText>
            {children}
          </Container>
        </CardBody>
      </>
    )}
    {portfolio.image && (
      <>
        <CardImg
          src={"/upload/" + portfolio.image}
          alt={portfolio.image}
          className="darken-image"
        />
        <CardImgOverlay>
          <Container className="px-0 h-50">
            <CardTitle className="portfolio-card-title">
              {limitTextLength(portfolio.title, 30)}
            </CardTitle>
            <CardText className="portfolio-card-text">
              {limitTextLength(portfolio.description, 100)}
            </CardText>
          </Container>
          {children}
        </CardImgOverlay>
      </>
    )}
  </Card>
);
