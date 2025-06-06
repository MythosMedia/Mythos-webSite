import React, { useEffect, useState } from 'react';

import './IGFeed.css'
import Spinners from '../../common/spinner/Spinners';

const IGFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = "IGQWRNc0tHTEViSWpINGU0LWxWaGM4RENUd0N2bm9zMXF0YU1lUWpILVJFWV82NkEzNkdGb0h4UHdXNVhRV2pJV0F5T0Qwc3lOcURMWWxVU3ZAZAWUhvS0g4QjhZATThJUmM2Qm8xUkFtTVVOdwZDZD"

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);  // Set loading to true before the fetch begins
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        setError('Failed to fetch Instagram posts. Please try again later.');
      } finally {
        setLoading(false);  // Set loading to false after the fetch completes or fails
      }
    };
  
    fetchInstagramPosts();
  }, [token]);
  

  return (
  
    <div className="instagram-section">
    <h2>What's New On Instagram?</h2>
    {loading &&<Spinners/>}
    {error && <h3>{error}</h3>}
    {!loading && !error && (
      <>
        <div className="instagram-header">
          <div className="profile-info">
            <img src="/images/mythos-logo-01.png" alt="Profile" className="profile-img" />
            <div className="profile-details">
              <h2>{posts[0]?.username}</h2>
              <span>{posts.length} posts</span>
            </div>
          </div>
          <a target='_blank' href={`https://www.instagram.com/${posts[0]?.username}/`} className="follow-btn" rel="noreferrer">Follow us</a>
        </div>
        <div className="posts-container">
          {posts.slice(0, 6).map((post, index) => (
            <a href={post.permalink} target="_blank" key={index} className="post-card" rel="noreferrer">
              <div className="overlay">
                  <img src="/images/instagram.png" alt="" />
              </div>
              {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                <img src={post.media_url} alt={post.caption} className="post-image" />
              ) : (
                <video controls className="post-video">
                  <source src={post.media_url} type="video/mp4" />
                </video>
              )}
              <div className="post-overlay">
                <div className="post-info">
                  <img src="/images/mythos-logo-01.png" alt="Profile" className="profile-img" />
                  <div className="">
                      <span className="post-username">{post.username}</span> <br />
                      <span className="post-date">{timeAgo(post.timestamp)}</span>
                  </div>
                </div>
                <div className="instagram-icon">
                  <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  <img src="/images/instagram64.png" width={32} alt="" />
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </>
    )}
  </div>
  );
};

const timeAgo = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
  
    for (const [key, value] of Object.entries(intervals)) {
      const count = Math.floor(diffInSeconds / value);
      if (count >= 1) {
        return `${count} ${key}${count > 1 ? 's' : ''} ago`;
      }
    }
  
    return 'Just now';
  };
  

export default IGFeed;
