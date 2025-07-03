import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import BlogSidebar from "../component/blog/BlogSidebar";
import BlogAuthor from "../component/blog/BlogAuthor";
import SEO from "../common/SEO";
import { FaPlay } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import LoaderMythos from "../component/loader/LoaderMythos";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const response = await fetch(
        `https://blogs.mythosmedia.io/wp-json/wp/v2/posts?slug=${slug}`
      );
      const posts = await response.json();
      if (posts && posts.length > 0) {
        setBlogDetails(posts[0]); // Assuming the slug returns a unique post
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (!blogDetails) {
    return <LoaderMythos />;
  }

  return (
    <>
      <SEO title={blogDetails.title.rendered} />
      <main className="main-wrapper">
        <HeaderOne />
        <BreadCrumbOne title={blogDetails.title.rendered} page="Blog" />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                {/* Example Post Content Rendering */}
                <div className="single-blog">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails.content.rendered,
                    }}
                  />
                  {/* <FsLightbox
                                        toggler={toggler}
                                        sources={['https://www.youtube.com/watch?v=1iIZeIy7TqM']}
                                    /> */}
                </div>
                <BlogAuthor data={blogDetails?._link?.authors?.[0]} />
              </div>
              <div className="col-lg-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  );
};

export default BlogDetails;
