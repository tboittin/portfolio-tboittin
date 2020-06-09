
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'

import { useGetPostById } from '@/actions'
import { useRouter } from 'next/router'
import { useGetUser } from '@/actions/user'

const Portfolio = () => {
    const router = useRouter()
    const {data: portfolio, error, loading} = useGetPostById(router.query.id)
    const { data: dataU, loading: loadingU } = useGetUser();

    return (
        <BaseLayout user={dataU} loading={loadingU}>
            <BasePage>
                {error && <div className='alert alert-danger'>{error.message}</div>}
                {loading && <p>Loading data ...</p>}
                {portfolio &&
                    <>
                        <h1>I am a Portfolio page</h1>
                        <h1>{portfolio.title}</h1>
                        <p>BODY : {portfolio.body}</p>
                        <p>ID : {portfolio.id}</p>
                    </>
                }
            </BasePage>
        </BaseLayout>
    )
}

export default Portfolio