import { Row, Col } from 'reactstrap'

import { useGetUser } from '@/actions/user'

import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'
import { HeadComponent } from 'components/shared/HeadComponent'

import { CVData } from '@/data'

const CV = () => {
  const { data, loading } = useGetUser()
  const { title, description, url } = CVData.head
  return (
    <>
      <HeadComponent title={title} description={description} url={url} />
      <BaseLayout user={data} loading={loading}>
        <BasePage title="My Experiences">
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <iframe
                style={{ width: '100%', height: '1000px' }}
                src="CV.pdf"
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  )
}

export default CV
