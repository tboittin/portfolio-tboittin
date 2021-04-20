import { useState, useRef, useEffect } from 'react'

import { useGetUser } from '@/actions/user'

import BasePage from 'components/BasePage'
import BaseLayout from '@/components/layout/BaseLayout'

import { FlippingCard } from 'components/homeComponents/FlippingCard'
import { TypedBlock } from 'components/homeComponents/TypedBlock'
import { PortfolioLinkBlock } from 'components/homeComponents/PortfolioLinkBlock'
import { HeadComponent } from 'components/shared/HeadComponent'

import {indexData} from '../data'

const Index = () => {
  const { data, loading } = useGetUser()
  const [isFlipping, setisFlipping] = useState(false)
  const flipInterval = useRef()

  const {title, description, url} = indexData.head

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
    <>
    <HeadComponent title={title} description={description} url={url} />
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

          <div className="index-container">
            <div className="hero-section">
              <FlippingCard isFlipping={isFlipping} ROLES={indexData.roles} />
            </div>
            <div className="typed-block">
              <TypedBlock INTRO={indexData.intro} />
            </div>
            <div className="portfolio-link-block">
              <PortfolioLinkBlock />
            </div>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
    </>
  )
}

export default Index
