
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage'
import { useGetUser } from 'actions/user'
import BlogApi from 'lib/api/blogs';
import { Row, Col } from 'reactstrap';
import { SlateView } from 'slate-simple-editor';
import Avatar from 'components/shared/Avatar';

const BlogDetail = ({blog, author}) => {
  const {data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="slate-container">
        <Row>
          <Col md={{size: 10, offset:1}}>
            <Avatar
              title = {author.name}
              image = {author.picture}
              date = {blog.createdAt} 
            />
            <hr />
            <SlateView 
              initialContent={blog.content}
            />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const {data} = await new BlogApi().getAll();
  const paths = data.map(({blog}) => ({ params: { slug: blog.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const {data: {blog, author}} = await new BlogApi().getBySlug(params.slug);
  return {props: {blog, author}}
}

export default BlogDetail;