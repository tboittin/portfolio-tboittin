
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import {Editor} from 'slate-simple-editor';
import {toast} from 'react-toastify';
import { useCreateBlog } from 'actions/blogs';
import { useRouter } from 'next/router';


const BlogEditor = ({user, loading}) => {
  const router = useRouter();
  const [createBlog, {data: createdBlog,error, loading: blogLoading}] = useCreateBlog();

  const saveBlog = async data => {
    const createdBlog = await createBlog(data)
    router.push('/blogs/editor/[id]', '/blogs/editor/'+createdBlog._id)
  }

  if (error) {
    toast.error(error.message);
  }

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <Editor 
          onSave = {saveBlog}
          loading = {blogLoading}
        />
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogEditor)('admin')