import { Container } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const PageHeader = ({ header }) => (
  <div className="page-header">
    <h1 className="page-header-title">{header}</h1>
  </div>
);

const BasePage = (props) => {
  const router = useRouter();
  const {
    noWrapper,
    indexPage,
    className = "",
    header,
    title = "Website",
    children,
    metaDescription = "Thomas Boittin's website. Freelance Web Developer based in France.",
    canonicalPath,
  } = props;

  const pageType = indexPage ? "index-page" : "base-page";

  const Wrapper = noWrapper ? React.Fragment : Container;

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
        <meta
          name="google-site-verification"
          content="QSwsJsnfifwg1vxUtgT_L75Q-E2uhIpaQZiA_pwTNjs"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="canonical"
          href={
            process.env.BASE_URL +
            (canonicalPath ? canonicalPath : router.asPath)
          }
        ></link>
      </Head>
      <div className={pageType + " " + className}>
        <Wrapper>
          {header && <PageHeader header={header} />}
          {children}
        </Wrapper>
      </div>
    </>
  );
};

export default BasePage;
