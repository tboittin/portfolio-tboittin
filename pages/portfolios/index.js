
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

import axios from 'axios'

import Link from 'next/link'
import { useEffect } from 'react'

const Portfolios = ({posts}) => {

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const data = await res.json();
            debugger;
        }

        getPosts();
    }, [])

    const renderPosts = posts => {
        return(
            <ul>
                {posts.map(post=>
                    <li key={post.id} style={{'fontSize':'20px'}}>
                        <Link as={'/portfolios/' + post.id} href='/portfolios/[id]'>
                            <a>
                                {post.title}
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        )
    }
    
    return(
        <BaseLayout>
            <BasePage>
                <h1>Hi I'm the Portfolios page!</h1>
                {renderPosts(posts)}
            </BasePage>
        </BaseLayout>
    )
}

Portfolios.getInitialProps = async () => {
    let posts = []
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        posts = res.data
    } catch (e) {
        console.error(e)
    }

    return {posts: posts.slice(0,10)}
}
  
export default Portfolios