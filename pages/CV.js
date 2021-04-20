
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'
import { useGetUser } from '@/actions/user'
import { Row, Col } from 'reactstrap';

const CV = () => {
    const { data, loading } = useGetUser();
    return(
        <BaseLayout user={data} loading={loading}>
            <BasePage title="My Experiences">
                <Row>
                    <Col md={{size: 10, offset:1}}>
                        <iframe style={{width:'100%', height:'1000px'}} src="CV.pdf"/>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
  
export default CV;