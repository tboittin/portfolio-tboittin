import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { toast } from "react-toastify";
import { useGetBlog, useUpdateBlog } from "actions/blogs";
import { useRouter } from "next/router";

const BlogUpdateEditor = ({ user, loading }) => {
  const router = useRouter()
  const {data} = useGetBlog(router.query.id);
  const [updateBlog, {error, loading: isBlogSaving}] = useUpdateBlog();

  const _updateBlog = async data =>{
    await updateBlog(router.query.id, data);
    toast.success('Blog updated!')
  }

  if (error) {
    debugger
    toast.error(error)
  }

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        {data && data.content &&
          <Editor 
            header="Update your Blog"
            initialContent={data.content}
            onSave={_updateBlog}
            loading={isBlogSaving}
          />
        }
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogUpdateEditor)("admin");
