import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const WidgetPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      const response = await fetch('/blog-proxy.php?per_page=3');
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
    } catch (error) {
      console.error('Failed to fetch posts', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Loading latest posts...</div>;

  return (
    <div className="post-list-wrap">
      {posts.map((data) => (
        <div className="single-post" key={data.id}>
          <div className="post-thumbnail-widget">
            <Link to={`/blog-details/${data.slug}`}>
              <img
                loading="lazy"
                src={data.featuredImage?.source_url || '/default-image.jpg'}
                alt={data.title.rendered}
                // style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '6px' }}
              />
            </Link>
          </div>
          <div className="post-content">
            <h6 className="title">
              <Link to={`/blog-details/${data.slug}`} dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
            </h6>
            <ul className="blog-meta list-unstyled">
              <li>{new Date(data.date).toLocaleDateString()}</li>
              <li>5 min read</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetPost;