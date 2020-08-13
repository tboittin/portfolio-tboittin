import Link from 'next/link';
import moment from 'moment';
import localization from 'moment/locale/fr';

// setup the fr parameter in moment.js to get the date format right
moment.updateLocale('fr', localization);

const BlogItem = ({blog}) => (
  <div>
    <div className="post-preview clickable">
      <Link href="/blogs/[slug]" as={'/blogs/'+blog.slug}>
        <a>
          <h2 className="post-title">{blog.title}</h2>
          <h3 className="post-subtitle">{blog.subtitle}</h3>
        </a>
      </Link>
      <p className="post-meta">
        Posted by
        <a href="#"> Thomas Boittin </a>- {moment(blog.createdAt).format('LLLL')}
      </p>
    </div>
    <hr></hr>
  </div>
);

export default BlogItem;