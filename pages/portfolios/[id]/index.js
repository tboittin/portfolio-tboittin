
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

import { useGetUser } from '@/actions/user'
import PortfolioApi from '@/lib/api/portfolios'

const Portfolio = ({portfolio}) => {
    const { data: dataU, loading: loadingU } = useGetUser();

    // TODO: Provide styling
    return (
        <BaseLayout user={dataU} loading={loadingU}>
            <BasePage header="Portfolio Detail" title={portfolio.title}>
                {
                    JSON.stringify(portfolio)
                }
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    // Get the paths we want to pre-render based on portfolio ID
    const paths = portfolios.map(portfolio =>{
        return {
            params: {id: portfolio._id}
        }
    })

    // fallback: false means that "not found pages" will be resolved into 404 page
    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data;
    return { props: {portfolio}}
}

export default Portfolio