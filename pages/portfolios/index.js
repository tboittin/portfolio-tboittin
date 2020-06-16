
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';


const Portfolios = ({portfolios}) => {
    const { data: dataU, loading: loadingU } = useGetUser();

    const renderPortfolios = portfolios => {
        return(
            <ul>
                {portfolios.map(portfolio=>
                    <li key={portfolio._id} style={{'fontSize':'20px'}}>
                        <Link as={'/portfolios/' + portfolio._id} href='/portfolios/[id]'>
                            <a>
                                {portfolio.title}
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        )
    }
    
    return(
        <BaseLayout user={dataU} loading={loadingU}>
            <BasePage>
                {renderPortfolios(portfolios)}
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