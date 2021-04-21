import { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { useRouter } from 'next/router'

import { useGetUser } from '@/actions/user'
import { useDeletePortfolio } from '@/actions/portfolios'
import PortfolioApi from '@/lib/api/portfolios'
import { isAuthorized } from '@/utils/auth0'

import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'
import { PortfolioCard } from '@/components/PortfolioCards'
import { HeadComponent } from 'components/shared/HeadComponent'

import {portfolioData} from '@/data'

const Portfolios = ({ portfolios: initialPortfolios }) => {
  const { data: dataU, loading: loadingU } = useGetUser()
  const router = useRouter()
  const [portfolios, setPortfolios] = useState(initialPortfolios)
  const [deletePortfolio, { data, error }] = useDeletePortfolio()

  const _deletePortfolio = async (e, portfolioId) => {
    // This function is to stop the propagation of the event,
    // it it wasn't here, the onClick would trigger the Col onClick
    // and lead to the id (detail) page of the element
    // instead of the edit page
    e.stopPropagation()
    const isConfirmed = confirm(
      'Are you sure you want to delete this portfolio?'
    )
    if (isConfirmed) {
      await deletePortfolio(portfolioId)
      setPortfolios(portfolios.filter((p) => p._id !== portfolioId))
    }
  }

  const {title, description, url} = portfolioData.head

  return (
    <>
    <HeadComponent title={title} description={description} url={url} />
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        className="portfolio-page"
        header="Portfolios"
        title="Portfolio"
      >
        <div className="portfolio-container">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio._id}
              onClick={() => {
                router.push('/portfolios/[id]', '/portfolios/' + portfolio._id)
              }}
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, 'admin') && (
                  <div className="button-row">
                    <Button
                      className="mr-2"
                      color="warning"
                      onClick={(e) => {
                        // This function is to stop the propagation of the event,
                        // it it wasn't here, the onClick would trigger the Col onClick
                        // and lead to the id (detail) page of the element
                        // instead of the edit page
                        e.stopPropagation()
                        router.push(
                          '/portfolios/[id]/edit',
                          '/portfolios/' + portfolio._id + '/edit'
                        )
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      {' '}
                      Delete{' '}
                    </Button>
                  </div>
                )}
              </PortfolioCard>
            </div>
          ))}
        </div>
        {/* <br />
        <Row className="portfolio-row">
          {portfolios.map((portfolio) => (
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push('/portfolios/[id]', '/portfolios/' + portfolio._id)
              }}
              md="4"
              className="mb-3"
            >
              <PortfolioCard portfolio={portfolio}>
                {dataU && isAuthorized(dataU, 'admin') && (
                  <div className="button-row">
                    <Button
                      className="mr-2"
                      color="warning"
                      onClick={(e) => {
                        // This function is to stop the propagation of the event,
                        // it it wasn't here, the onClick would trigger the Col onClick
                        // and lead to the id (detail) page of the element
                        // instead of the edit page
                        e.stopPropagation()
                        router.push(
                          '/portfolios/[id]/edit',
                          '/portfolios/' + portfolio._id + '/edit'
                        )
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    >
                      {' '}
                      Delete{' '}
                    </Button>
                  </div>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row> */}
      </BasePage>
    </BaseLayout>
    </>
  )
}

// this function is called during building time
// improves performance of page,
// it will create static page with dynamic data
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll()
  const portfolios = json.data
  return {
    props: { portfolios },
    unstable_revalidate: 1,
  }
}

export default Portfolios
