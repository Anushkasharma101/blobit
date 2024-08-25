import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://assignment-blobit-backend.onrender.com/api/blogs/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
          throw new Error('Blog not found');
        }

        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Extract heading values
  const heading1 = blog?.blogDetail.find(item => item.class === "Heading 1")?.value;
  const heading2 = blog?.blogDetail.find(item => item.class === "Heading 2")?.value;
  const heading3 = blog?.blogDetail.find(item => item.class === "Heading 3")?.value;
  const paragraph = blog?.blogDetail.find(item=>item.class === "Paragraph")?.value;
  const imgDetail = blog?.blogDetail.find(item => item.class === "Img")?.value;
  const imgUrl = imgDetail?.Imgurl;
  const altText = imgDetail?.alttext;
  const coverImg = blog?.coverImg;
  

  return (
    <div className="w-full p-8">
      {blog ? (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{blog.Heading}</h1>
          {coverImg && (
            <img
              src={coverImg}
              alt="Cover"
              className="w-full h-auto mb-6 object-cover"
            />
          )}
          {heading1 && (
            <div className="text-2xl font-semibold mt-6 mb-4">
              {heading1}
            </div>
          )}
          {heading2 && (
            <div className="text-xl font-semibold mt-4 mb-4">
              {heading2}
            </div>
          )}
          {heading3 && (
            <div className="text-lg font-semibold mt-4 mb-4">
              {heading3}
            </div>
          )}
          {imgUrl && (
            <img
              src={imgUrl}
              alt={altText || "Image"}
              className="w-full h-auto mt-4 mb-6 object-cover"
            />
          )}
          {paragraph && (
            <div className="leading-relaxed text-lg mt-4">
              {paragraph}
            </div>
          )}
        </div>
      ) : (
        <div>No blog found</div>
      )}
    </div>
  );
};

export default BlogDetail;
