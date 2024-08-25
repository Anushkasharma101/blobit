import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MixSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch blogs when component mounts or currentPage changes
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://assignment-blobit-backend.onrender.com/api/blogs?page=${currentPage}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        console.log(data);
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
    }
    console.log(currentPage);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://assignment-blobit-backend.onrender.com/api/blogs/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      setBlogs(blogs.filter((blog) => blog._id !== id)); // Update the local state to remove the deleted blog
      alert("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  return (
    <div className="w-full h-full p-5 flex flex-col items-center">
      <div className="flex w-[100%] h-[15%] items-center gap-5 p-2 mb-5">
        <div className="text-black text-7xl font-customOutfit">BLOGS</div>
        <p className="text-black text-xl font-customOutfit">
          Explore our latest blogs, packed with insights, inspiration, and
          expert knowledge just for you!
        </p>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mt-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white hover:bg-customText shadow-md rounded-lg overflow-hidden p-4 w-[90%] min-h-[90%] cursor-pointer"
          >
            {" "}
            <img
              src={blog.coverImg} // Assuming your API provides an image field
              alt={blog.alttext}
              className="w-full h-[70%] object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold w-full h-[10%] p-2 mb-3 overflow-hidden text-ellipsis whitespace-nowrap">
              {blog.Heading}
            </h2>
            <div className="w-full h-[10%] flex p-2 gap-4">
              <Link className="w-[20%]" to={`/create/${blog._id}`}><div className="text-lg font-semibold text-white rounded-md bg-black w-full h-full text-center items-center flex justify-center">
                Edit
              </div> 
              </Link>
              <span
                onClick={() => handleDelete(blog._id)}
                className="text-lg font-semibold text-white rounded-md bg-black w-[20%] h-full text-center items-center flex justify-center cursor-pointer"
              >
                Delete
              </span>

              <span className="w-[20%] h-full">
                <Link to={`/blogs/${blog._id}`}>
                  <img
                    src="/assets/arrow.png"
                    alt="arrow"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full h-[10%] p-1 gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-black text-black rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          // disabled={currentPage === totalPages}
          className="px-4 py-2 border border-black text-black rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MixSection;
