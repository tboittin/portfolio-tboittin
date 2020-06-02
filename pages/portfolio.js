import React from 'react'
import BaseLayout from '../components/layout/BaseLayout'

class Portfolio extends React.Component {

    render () {
        const {portfolio} = this.props
        return(
            <BaseLayout>
                <h1>I am the Portfolio page</h1>
            </BaseLayout>
        )
    }
}

export default Portfolio