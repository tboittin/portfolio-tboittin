import React from 'react'
import BaseLayout from '../components/layout/BaseLayout'

import axios from 'axios'
import posts from './api/posts'

class Portfolios extends React.Component {

    static async getInitialProps () {
        let posts = []
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = res.data
        } catch (e) {
            console.error(e)
        }

        return {posts: posts.slice(0,10)}
    }

    renderPosts(posts) {
        return(
            <ul>
                {posts.map(post=>
                    <li key={post.id} >
                        {post.id}
                    </li>
                )}
            </ul>
        )
    }

    render () {
        const {posts} = this.props
        return(
            <BaseLayout>
                <h1>Hi I'm the Portfolios page!</h1>
                {this.renderPosts(posts)}
            </BaseLayout>
        )
    }
}
  
export default Portfolios