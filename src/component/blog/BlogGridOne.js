import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaAngleRight,
  FaAngleLeft,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import ReactPaginate from "react-paginate";
import LoaderMythos from "../loader/LoaderMythos";

const BlogGridOne = () => {
  const [toggler, setToggler] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const blogsPerPage = 5;
  const pageCount = Math.ceil(blogs.length / blogsPerPage);
  const pageVisited = pageNumber * blogsPerPage;
  const [isLoading, setisLoading] = useState(true);

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaAngleRight />,
    prevArrow: <FaAngleLeft />,
  };

  const fetchMedia = async (mediaId) => {
    const mediaResponse = await fetch(
      `https://blogs.mythosmedia.io/wp-json/wp/v2/media/${mediaId}`
    );
    return mediaResponse.json();
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://blogs.mythosmedia.io/blog-proxy.php?per_page=100");

      // Check for HTTP errors
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Expected JSON but received:", text);
        throw new Error("Invalid content-type: " + contentType);
      }

      const data = await response.json();

      // Fetch featured images with fallback
      const blogsWithMedia = await Promise.all(
        data.map(async (post) => {
          if (post.featured_media > 0) {
            try {
              post.featuredImage = await fetchMedia(post.featured_media);
            } catch (err) {
              console.warn(`Failed to fetch media for post ${post.id}:`, err);
              post.featuredImage = null;
            }
          }
          return post;
        })
      );

      setBlogs(blogsWithMedia);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setBlogs([]); // fallback to empty if needed
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {isLoading ? (
        <LoaderMythos />
      ) : (
        blogs.slice(pageVisited, pageVisited + blogsPerPage).map((data) => (
          <div className="blog-grid" key={data.id}>
            <h3 className="title">
              <Link to={`/blog-details/${data.slug}`}>
                {decodeHtml(data.title.rendered)}
              </Link>
            </h3>
            <div className="author">
              <img
                loading="lazy"
                width="80"
                src={data?.authors?.[0]?.avatar_url?.url || data?.authors?.[0]?.avatar_url}
                alt="Blog Author"
              />
              <div>
                <h6 className="author-name">
                  <Link to={`/team-details/${data?.authors?.[0]?.slug}`}>
                    {data?.authors?.[0]?.display_name}
                  </Link>
                </h6>
                <ul className="blog-meta list-unstyled">
                  <li>{new Date(data?.date).toLocaleDateString()}</li>
                  <li>5 min read</li>
                </ul>
              </div>
            </div>
            <div className="post-thumbnail">
              {data?.featuredImage ? (
                <img
                  loading="lazy"
                  src={data.featuredImage.guid.rendered}
                  alt={data.title.rendered}
                />
              ) : null}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.excerpt?.rendered,
              }}
            ></p>
            <Link
              className="axil-btn btn-borderd btn-large"
              to={`/blog-details/${data?.slug}`}
            >
              Read More
            </Link>
            <hr style={{ marginTop: "45px" }} />
          </div>
        ))
      )}
    </>
  );
};

export default BlogGridOne;