
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

import Link from 'next/link'
import { useGetPosts } from '@/actions'
import { useGetUser } from '@/actions/user'


const Portfolios = () => {

    const { data, error, loading } = useGetPosts();
    const { data: dataU, loading: loadingU } = useGetUser();

    const renderPosts = data => {
        return(
            <ul>
                {data.map(post=>
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
        <BaseLayout user={dataU} loading={loadingU}>
            <BasePage>
                <h1>Hi I'm the Portfolios page!</h1>
                {loading && 
                    <p>Loading data ...</p>
                }
                {data && renderPosts(data)}
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