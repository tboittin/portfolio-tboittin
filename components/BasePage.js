import { Container } from "reactstrap";
import Head from "next/head";

const BasePage = (props) => {
  const {
    indexPage,
    className = "",
    header,
    title = 'Website',
    children,
    metaDescription = "My name is Thomas Boittin and I am a freelance web-developer. Have a look at my work !",
  } = props;
  const pageType = indexPage ? "index-page" : "base-page";
  return (
    <>
      <Head>
        <title>{title + " - Thomas Boittin"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={metaDescription}
          key="description"
        />
        <meta
          name="title"
          content={title}
          key="title"
        />
      </Head>
      <div className={pageType + " " + className}>
        <Container>
          {header && (
            <div className="page-header">
              <h1 className="page-header-title">{header}</h1>
            </div>
          )}
          {children}
        </Container>
      </div>
    </>
  );
};

export default BasePage;
