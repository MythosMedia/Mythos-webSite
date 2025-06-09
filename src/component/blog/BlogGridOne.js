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
  const [isLoading , setisLoading ] = useState(true);

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
      const response = await fetch("/blog-proxy.php?per_page=100");
      const data = await response.json();
      console.log("data",data)
      const blogsWithMedia = await Promise.all(
        data.map(async (post) => {
          if (post.featured_media > 0) {
            post.featuredImage = await fetchMedia(post.featured_media);
          }
          return post;
        })
      );
      setBlogs(blogsWithMedia);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setisLoading(false);  // Set loading to false after data is fetched or an error occurs
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
        <LoaderMythos />  // Your custom loading component
      ) : (
        blogs.slice(pageVisited, pageVisited + blogsPerPage).map((data) => (
          <div className="blog-grid" key={data.id}>
            <h3 className="title">
              <Link to={`/blog-details/${data.slug}`}>
                {decodeHtml(data.title.rendered)}
              </Link>
            </h3>
            <div className="author">
              <img loading="lazy" width="80" src={data.authors[0].avatar_url.url || data.authors[0].avatar_url} alt="Blog Author" />
              <div>
                <h6 className="author-name">
                  <Link to={`/team-details/${data.authors[0].slug}`}>{data.authors[0].display_name}</Link>
                </h6>
                <ul className="blog-meta list-unstyled">
                  <li>{new Date(data.date).toLocaleDateString()}</li>
                  <li>5 min read</li>
                </ul>
              </div>
            </div>
            <div className="post-thumbnail">
              {data.featuredImage ? (
                <img
                  loading="lazy"
                  src={data.featuredImage.guid.rendered}
                  alt={data.title.rendered}
                />
              ) : null}
            </div>
            <p dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></p>
            <Link
              className="axil-btn btn-borderd btn-large"
              to={`/blog-details/${data.slug}`}
            >
              Read More
            </Link>
            <hr style={{marginTop:'45px'}} />
          </div>
        ))
      )}
    </>
  );
  
};

export default BlogGridOne;
