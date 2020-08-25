import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";

import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";

import { formatDate } from "helpers/functions";

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        indexPage
        noWrapper
        title={portfolio.title}
        metaDescription={portfolio.description}
      >
        <div className="portfolio-detail">
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <h1 class="cover-heading">{portfolio.title}</h1>
              <p class="lead dates">
                {formatDate(portfolio.startDate, "LL")}
                {portfolio.endDate
                  ? " - " + formatDate(portfolio.endDate, "LL")
                  : " - ongoing"}
              </p>
              <p class="lead info mb-0">
                {portfolio.jobTitle} | {portfolio.company} |{" "}
                {portfolio.location}
              </p>
              <p class="lead">{portfolio.description}</p>
              <p class="lead">
                <a
                  href={portfolio.companyWebsite}
                  target="_"
                  class="btn btn-lg btn-secondary"
                >
                  Visit Company
                </a>
              </p>
            </main>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  // Get the paths we want to pre-render based on portfolio ID
  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id },
    };
  });

  // fallback: false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio }, unstable_revalidate: 60 };
}

export default Portfolio;
