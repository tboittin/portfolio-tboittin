
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

import Link from 'next/link'
import {useGetPosts} from '@/actions'

const Portfolios = () => {

    const { posts, error, loading } = useGetPosts();
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
                {loading && 
                    <p>Loading data ...</p>
                }
                {posts && renderPosts(posts)}
                {error && 
                    <div className="alert alert-danger">
                        {error.message}
                    </div>
                }
            </BasePage>
        </BaseLayout>
    )
}
  
export default Portfolios