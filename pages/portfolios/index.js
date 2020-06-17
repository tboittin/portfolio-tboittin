
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import { PortfolioCard } from '@/components/PortfolioCards';
import { Row, Col} from 'reactstrap'
import { useRouter } from 'next/router';


const Portfolios = ({portfolios}) => {
    const { data: dataU, loading: loadingU } = useGetUser();
    const router = useRouter();

    return(
        <BaseLayout user={dataU} loading={loadingU}>
            <BasePage 
                className="portfolio-page"
                header="Portfolios"
            >
                <Row>
                    {portfolios.map(portfolio =>
                        <Col
                            key={portfolio._id}
                            onClick={() => {
                                router.push('/portfolios/[id]', '/portfolios/'+portfolio._id)
                            }}
                            md="4"
                        >
                            <PortfolioCard portfolio={portfolio} />
                        </Col>
                    )}
                </Row>
            </BasePage>
        </BaseLayout>
    )
}


// this function is called during building time
// improves performance of page,
// it will create static page with dynamic data
export async function getStaticProps() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;
    return {
        props: {portfolios}
    }
}
  
export default Portfolios