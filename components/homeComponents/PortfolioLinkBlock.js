import { Button } from 'reactstrap'
import Link from 'next/link'

export const PortfolioLinkBlock = () => (
  <div className="hero-welcome-bio">
    <p>Let's take a look at my work.</p>
    <Link href="/portfolios">
      <Button size="lg" className="mt-3 mb-5 button-index" block>
        Portfolio
      </Button>
    </Link>
  </div>
)
