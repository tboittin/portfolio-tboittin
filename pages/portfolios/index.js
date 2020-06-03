
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const Portfolios = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const data = await res.json();
            setPosts(data);
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
  
export default Portfolios