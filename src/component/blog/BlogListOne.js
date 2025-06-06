import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogListOne = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMedia = async (mediaId) => {
    try {
      const mediaResponse = await fetch(`https://blogs.mythosmedia.io/wp-json/wp/v2/media/${mediaId}`);
      if (!mediaResponse.ok) throw new Error('Failed to fetch media');
      return mediaResponse.json();
    } catch (error) {
      console.error('Error fetching media:', error);
      return null;
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://blogs.mythosmedia.io/wp-json/wp/v2/posts?per_page=3');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      const postsWithMedia = await Promise.all(
        data.map(async (post) => {
          if (post.featured_media > 0) {
            post.featuredImage = await fetchMedia(post.featured_media);
          }
          return post;
        })
      );
      setPosts(postsWithMedia);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const truncateText = (html, maxLength) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) {
    return <div className="text-center py-5">Loading posts...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center" role="alert">Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div className="col-lg-4 col-md-12 col-sm-12" key={post.id}>
            <div className="card h-100 shadow-sm border-0 d-flex flex-column">
              {post.featuredImage && (
                <div style={{ aspectRatio: '16 / 9', overflow: 'hidden' }}>
                  <img
                    src={post.featuredImage.source_url}
                    className="card-img-top w-100 h-100 object-fit-cover"
                    alt={post.title.rendered}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  <Link
                    to={`/blog-details/${post.slug}`}
                    className="text-decoration-none text-dark"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </h5>
                <p className="card-text flex-grow-1">
                  {truncateText(post.excerpt.rendered, 100)}
                </p>
                <Link
                  to={`/blog-details/${post.slug}`}
                  className="more-btn mt-auto"
                  style={{ color: "#002c6e" }}
                >
                  Learn more <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          aria-label='link to contact page to estimate project'
          to="/blog"
          className="axil-btn btn-large btn-fill-white"
        >
          See All Blogs
        </Link>
      </div>
    </div>
  );
}

export default BlogListOne;
