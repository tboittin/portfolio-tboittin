import React from 'react'
import BaseLayout from '../components/layout/BaseLayout'

class Portfolios extends React.Component {
    render () {
        const { appProps } = this.props
        return(
            <BaseLayout>
                <h1>Hi I'm the Portfolios page!</h1>
                {appProps}
            </BaseLayout>
        )
    }
}
  
export default Portfolios