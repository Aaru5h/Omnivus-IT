import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogAPI';
import { Calendar, Eye, MessageCircle } from 'lucide-react';

const Blog = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="text-primary mb-2 block text-lg font-semibold">Our Blog</span>
          <h2 className="text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
            Latest Articles & Resources
          </h2>
          <p className="text-body-color text-base mt-4 max-w-2xl mx-auto">
            Explore tips, news, and insights from our experts.
          </p>
        </div>

        {loading && (
          <div className="text-center text-lg text-gray-600">Loading blogs...</div>
        )}

        {error && (
          <div className="text-center text-red-500 text-lg">Error: {error}</div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center text-gray-600 text-lg">No blogs available.</div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="flex flex-col gap-10">
            {posts.map((blog) => (
              <div
                key={blog.id}
                className="rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                {blog.bannerImage && (
                  <img
                    src={blog.bannerImage}
                    alt={blog.title}
                    className="mb-4 w-full rounded-lg object-contain max-h-[400px]"
                  />
                )}

                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>

                <h3 className="text-2xl font-bold text-dark mb-3">{blog.title}</h3>

                <div className="flex items-center text-sm text-gray-500 gap-6 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{blog.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{blog.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <p className="text-body-color text-sm mb-6">{blog.description}</p>

                <div className="flex items-center gap-2">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    by {blog.author.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
