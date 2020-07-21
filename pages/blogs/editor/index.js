
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'


const BlogEditor = ({user, loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="BLOG EDITOR">
        <h1>Welcome</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogEditor)('admin')