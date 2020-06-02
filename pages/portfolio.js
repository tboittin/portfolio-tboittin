import React from 'react'
import BaseLayout from '../components/layout/BaseLayout'
import axios from 'axios'

class Portfolio extends React.Component {

    static async getInitialProps ({query}) {
        let post = {}
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+query.id)
            post = res.data
        } catch (e) {
            console.error(e)
        }
        
        return {portfolio: post}
    }

    render () {
        const {portfolio} = this.props
        return(
            <BaseLayout>
                <h1>{portfolio.title}</h1>
                <h2>BODY : {portfolio.body}</h2>
                <h2>ID : {portfolio.id}</h2>
            </BaseLayout>
        )
    }
}

export default Portfolio