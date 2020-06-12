
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth'

const OnlyAdmin = ({user, loading}) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>I am Admin Page - Hello {user.nickname} </h1>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(OnlyAdmin)('admin')