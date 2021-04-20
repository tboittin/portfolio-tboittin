import { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { useGetUser } from '@/actions/user'

import BasePage from 'components/BasePage'
import BaseLayout from '@/components/layout/BaseLayout'

import { FlippingCard } from 'components/homeComponents/FlippingCard'
import { TypedBlock } from 'components/homeComponents/TypedBlock'
import { PortfolioLinkBlock } from 'components/homeComponents/PortfolioLinkBlock'

const INTRO = [
  "Welcome to Thomas Boittin's website ! I put here my projects and some cool stuff !",
]
const ROLES = [
  'React.js dev',
  'Next.js dev',
  'Fast Learner',
  'Web enthousiast',
  'Casual Gamer',
  'Nerd',
]

const Index = () => {
  const { data, loading } = useGetUser()
  const [isFlipping, setisFlipping] = useState(false)
  const flipInterval = useRef()

  useEffect(() => {
    startAnimation()
    return () => flipInterval.current && clearInterval(flipInterval.current)
  }, [])

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setisFlipping((prevFlipping) => !prevFlipping)
    }, 30000)
  }

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className={'cover' + (isFlipping ? ' cover-orange' : ' cover-blue')}
    >
      <BasePage indexPage title="Home">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col xs="12" lg="6">
                <div className="hero-section">
                  <FlippingCard isFlipping={isFlipping} ROLES={ROLES} />
                </div>
              </Col>
              <Col lg="6" xs="12" className="hero-welcome-wrapper">
                <TypedBlock INTRO={INTRO} />
                <PortfolioLinkBlock />
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index
