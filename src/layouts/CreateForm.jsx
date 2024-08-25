import React, { useEffect, useState } from "react";
import { imageDB } from "../firebase/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const CreateForm = () => {
  const { id } = useParams(); 
  
  
  const [blogData, setBlogData] = useState({
    Heading: "",
    coverImg: "",
    blogDetail: [],
    
  });
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
        setBlogData(data);
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

   id !== 'id' && fetchBlog();
  }, [id]);

  const [selectedOption, setSelectedOption] = useState("Heading 1");
  const [coverImgOption, setCoverImgOption] = useState("device");
  const [img, setImg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
console.log("cover imageeeee","name:-",name,"value:- ",value,"file:- ",files);

    if (
      name === "coverImg" &&
      coverImgOption === "device" &&
      files.length > 0
    ) {
      setImg(files[0]);
      uploadCoverImage();
    } else if (name === "coverImg" && coverImgOption === "url") {
      setBlogData((prevData) => ({ ...prevData, coverImg: value }));
    } else {
      setBlogData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const uploadCoverImage = async () => {
    try {
      if (img) {
        console.log("Starting upload...");
        const imgRef = ref(imageDB, `coverImages/${uuidv4()}`);
        const snapshot = await uploadBytes(imgRef, img);
        const url = await getDownloadURL(snapshot.ref);
        console.log("Image URL:", url);
        // Set the cover image URL in state
        setBlogData((prevData) => {
          const newData = { ...prevData, coverImg: url };
          console.log('Updated blogData..........:', newData);
          return newData;
        });

        console.log('Cover image uploaded and state updated');
      } else {
        console.log("No image selected");
      }
    } catch (error) {
      console.error("Error uploading cover image:", error);
    }
  };
  
  

  const handleFileUpload = (index, e) => {
    const file = e.target.files[0];
    const fileRef = ref(imageDB, `blogImages/${uuidv4()}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        handleBlockChange(index, "Imgurl", url);
      });
    });
  };

  const addBlock = () => {
    let newBlock = { class: selectedOption, value: "" };
    if (selectedOption === "Img") {
      newBlock.value = { Imgurl: "", alttext: "" };
    }
    setBlogData((prevData) => ({
      ...prevData,
      blogDetail: [...prevData.blogDetail, newBlock],
    }));
  };

  const handleBlockChange = (index, key, value) => {
    const updatedBlogDetail = [...blogData.blogDetail];
    if (updatedBlogDetail[index].class === "Img") {
      updatedBlogDetail[index].value[key] = value;
    } else {
      updatedBlogDetail[index].value = value;
    }
    setBlogData((prevData) => ({
      ...prevData,
      blogDetail: updatedBlogDetail,
    }));
  };

  const deleteBlock = (index) => {
    const updatedBlogDetail = blogData.blogDetail.filter((_, i) => i !== index);
    setBlogData((prevData) => ({ ...prevData, blogDetail: updatedBlogDetail }));
  };
  const handleSubmit = async () => {
    try {
      // Wait for the state to be updated with the cover image URL before submission
      console.log("Blog Data on Submit....:", blogData);
      const api = id === 'id' ? 'https://assignment-blobit-backend.onrender.com/api/blogs': `https://assignment-blobit-backend.onrender.com/api/blogs/${id}`
      const response = await fetch(api, {
        method: id === 'id' ?'POST':'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
      });
  
      console.log("Response from server:", await response.json());
      alert('Blog created successfully!');
  
      // Reset the form after successful submission
      setBlogData({
        Heading: "",
        coverImg: "",
        blogDetail: [],
      });
    } catch (error) {
      console.error("Error during form submission:", error);
      alert('Failed to create blog. Please try again.');
    }
  };
  

  return (
    <div className="w-full h-[80%] flex justify-center p-4">
    <div className="create-form w-[40%] h-[100%] bg-white overflow-auto border border-gray-500 rounded-xl p-4">
      <div className="default-block mb-4 p-4 border rounded w-full h-[40%]">
        <div className="mb-4 w-full h-[40%]">
          <label className="block font-semibold w-full h-[40%]">Blog Title</label>
          <input
            type="text"
            name="Heading"
            placeholder="Enter blog title"
            value={blogData.Heading}
            onChange={(e)=>{handleInputChange(e)}}
            className="border p-2 rounded w-full h-[60%]"
          />
        </div>
        <div className="w-full h-[50%]">
          <label className="font-semibold">Cover Image</label>
          <div className="">
            <label className="mr-2">
              <input
                type="radio"
                name="coverImgOption"
                value="device"
                checked={coverImgOption === "device"}
                onChange={(e) => setCoverImgOption(e.target.value)}
              />{" "}
              Upload from Device
            </label>
            <label>
              <input
                type="radio"
                name="coverImgOption"
                value="url"
                checked={coverImgOption === "url"}
                onChange={(e) => setCoverImgOption(e.target.value)}
              />{" "}
              Enter Image URL
            </label>
          </div>
          {coverImgOption === "device" ? (
            <input
              type="file"
              name="coverImg"
              accept="image/*"
              onChange={handleInputChange}
              className="block mt-2 w-full"
            />
          ) : (
            <input
              type="text"
              name="coverImg"
              placeholder="Enter image URL"
              value={blogData.coverImg}
              onChange={handleInputChange}
              className="block mt-2 w-full border p-2"
            />
          )}
        </div>
      </div>

      {blogData.blogDetail.map((block, index) => (
        <div key={index} className="block mb-4 p-2 border rounded">
          {block.class === "Img" ? (
            <>
              <div className="flex w-full h-auto items-end gap-2">
                <div className="flex flex-col w-[85%]">
                  <label className="block mb-2 font-semibold">Image URL:</label>
                  <input
                    type="text"
                    placeholder="Enter image URL"
                    value={block.value.Imgurl}
                    onChange={(e) =>
                      handleBlockChange(index, "Imgurl", e.target.value)
                    }
                    className="block mt-2 w-full border p-2"
                  />
                </div>
                <div className="flex flex-col w-[85%] mt-4">
                  <label className="block mb-2 font-semibold">
                    Or Upload Image:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(index, e)}
                    className="block w-full border p-2"
                  />
                </div>
                <div className="w-[15%] h-full">
                  <button
                    onClick={() => deleteBlock(index)}
                    className="bg-red-500 text-white p-2 rounded w-full h-[100%]"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="flex w-full h-auto items-end gap-2 mt-2">
                <div className="flex flex-col w-[85%]">
                  <label className="block mb-2 font-semibold">Alt Text:</label>
                  <input
                    type="text"
                    placeholder="Enter alt text"
                    value={block.value.alttext}
                    onChange={(e) =>
                      handleBlockChange(index, "alttext", e.target.value)
                    }
                    className="block mt-2 w-full border p-2"
                  />
                </div>
                <div className="w-[15%] h-full">
                  <button
                    onClick={() => deleteBlock(index)}
                    className="bg-red-500 text-white p-2 rounded w-full h-[100%]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          ) : block.class === "Paragraph" ? (
            <div className="flex flex-col w-full mb-2">
              <label className="block mb-2 font-semibold">Paragraph:</label>
              <textarea
                rows="4"
                placeholder="Enter paragraph text"
                value={block.value}
                onChange={(e) =>
                  handleBlockChange(index, "value", e.target.value)
                }
                className="w-full border p-2 rounded resize-none"
              />
              <button
                onClick={() => deleteBlock(index)}
                className="bg-red-500 text-white p-2 rounded w-full mt-2"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="flex w-full h-auto items-end gap-2">
              <div className="flex flex-col w-[85%]">
                <label className="block font-semibold w-[90%] h-full">
                  {block.class}:
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${block.class} text`}
                  value={block.value}
                  onChange={(e) =>
                    handleBlockChange(index, "value", e.target.value)
                  }
                  className="w-full h-full border p-2"
                />
              </div>
              <div className="w-[15%] h-full">
                <button
                  onClick={() => deleteBlock(index)}
                  className="bg-red-500 text-white p-2 rounded w-full h-[100%]"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="block-selection mb-4 w-full h-auto">
        <label className="mr-2">Choose Block Type:</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Heading 1">Heading 1</option>
          <option value="Heading 2">Heading 2</option>
          <option value="Heading 3">Heading 3</option>
          <option value="Paragraph">Paragraph</option>
          <option value="Img">Image</option>
        </select>
        <button
          onClick={addBlock}
          className="ml-4 bg-blue-500 text-white p-2 rounded"
        >
          Add Block
        </button>
      </div>

      <div className="w-full h-[10%] flex gap-3 p-2">
        <button
          onClick={handleSubmit}
          className=" bg-green-500 text-white p-2 rounded w-[15%] h-full flex items-center justify-center"
        >
          Create
        </button>
       
      </div>
    </div>
    </div>
  );
};

export default CreateForm;
