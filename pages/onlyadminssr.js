
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import {authorizeUser} from '@/utils/auth0'
import { withAuth } from '@/utils/auth0';

const OnlyAdminSSR = ({user, title}) => {
    debugger
    return (
        <BaseLayout user={user} loading={false}>
            <BasePage>
                <h1>I am Secret Page - Hello {user && user.nickname} </h1>
                <h2>{title}</h2>
            </BasePage>
        </BaseLayout>
    )
}

const getTitle =  () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({title : 'My new title!'})
        }, 500)
    })
    
};

export const getServerSideProps =  withAuth( async({req, res}, user) => {
    const title = await getTitle()
    return title;
})('admin');

export default OnlyAdminSSR