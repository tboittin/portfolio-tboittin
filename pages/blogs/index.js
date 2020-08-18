import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Row, Col} from "reactstrap";
import Masthead from "components/shared/Masthead";
import BlogApi from 'lib/api/blogs';
import BlogItem from "components/BlogItem";

const Blogs = ({blogs}) => {
  const { data, loading } = useGetUser();
  debugger
  return (
    <BaseLayout
      navClass="transparent"
      className="blog-listing-page"
      user={null}
      loading={false}
    >
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Fresh Blogs</h1>
        <span className="subheading">Programming, travelling...</span>
      </Masthead>
      <BasePage className="blog-body" title="Blog">
        <Row>
          {blogs.map(blog => 
            <Col key={blog._id} md="10" lg="8" className="mx-auto">
              <BlogItem blog={blog}/>
            </Col>
          )}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
    const {data} = await new BlogApi().getAll();
    const blogs = data.map(item => ({...item.blog, author: item.author}))
    return {
        props: {blogs},
        unstable_revalidate: 60
    }
}

export default Blogs;
