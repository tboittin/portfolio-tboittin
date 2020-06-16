
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import { PortfolioCard } from '@/components/PortfolioCards';
import { Row, Col} from 'reactstrap'


const Portfolios = ({portfolios}) => {
    const { data: dataU, loading: loadingU } = useGetUser();
    
    return(
        <BaseLayout user={dataU} loading={loadingU}>
            <BasePage 
                className="portfolio-page"
                header="Portfolios"
            >
                <Row>
                    {portfolios.map(portfolio =>
                        <Col key={portfolio._id} md="4">
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