import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";
import placeholderImage from "../../Assets/Images/Upload-video-preview.jpg";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default to today's date
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;

    if (newTitle.length > 100) {
      alert("Title exceeds 100 characters. Please shorten it.");
      return;
    }

    setTitle(newTitle);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handlePhotoSubmit = async (event) => {
    event.preventDefault();

    if (!title || !selectedFile || !date) {
      setUploadStatus("Looks like you're missing something.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("poster", selectedFile);
    formData.append("date", date); // Add the date to the form data

    try {
      const response = await axios.post(`${baseUrl}/photos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus("Photo uploaded successfully!");
      setTitle("");
      setSelectedFile(null);
      setDate(new Date().toISOString().split("T")[0]); // Reset to today's date
    } catch (error) {
      console.error("Error uploading photo:", error);
      setUploadStatus("Error uploading photo. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="upload-page">
      <form onSubmit={handlePhotoSubmit}>
        <img
          src={
            selectedFile ? URL.createObjectURL(selectedFile) : placeholderImage
          }
          alt="Preview"
          className="upload-page__thumbnail"
        />
        <div className="upload-page__top">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="upload-page__file-input"
          />
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="upload-page__date-input"
          />
        </div>
        <input
          type="text"
          placeholder="What made you smile today?"
          value={title}
          onChange={handleTitleChange}
          className="upload-page__title-input"
          maxLength="100"
        />
        <div className="upload-page__button-group">
          <button type="submit" className="upload-page__button">
            Add Photo
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="upload-page__button"
          >
            Cancel
          </button>
        </div>
      </form>
      {uploadStatus && <p className="upload-page__status">{uploadStatus}</p>}
    </div>
  );
}

export default UploadPage;