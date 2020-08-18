import { Container } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";

const BasePage = (props) => {
  const router = useRouter();
  const {
    indexPage,
    className = "",
    header,
    title = "Website",
    children,
    metaDescription = "My name is Thomas Boittin and I am a freelance web-developer. Have a look at my work !",
    canonicalPath
  } = props;

  const pageType = indexPage ? "index-page" : "base-page";
  return (
    <>
      <Head>
        <title>{title + " - Thomas Boittin"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} key="description" />
        <meta name="title" content={title} key="title" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:locale" content="en_EU" key="og:locale" />
        <meta
          property="og:url"
          content={process.env.BASE_URL + router.asPath}
          key="og:url"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:description"
          content={metaDescription}
          key="og:description"
        />
        <meta
          property="og:image"
          content={process.env.BASE_URL + "/images/section-1.png"}
          key="og:image"
        />
        <link
          rel="canonical"
          href={process.env.BASE_URL + (canonicalPath ? canonicalPath : router.asPath)} 
        ></link>
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
