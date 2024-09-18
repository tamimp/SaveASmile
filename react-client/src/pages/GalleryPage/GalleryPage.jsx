import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import "./GalleryPage.scss";

function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState(null);

  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await axios.get(`${baseUrl}/photos`);
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    getPhotos();
  }, [baseUrl]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    date.setDate(date.getDate() + 1);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleDeleteClick = (id) => {
    setPhotoToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/photos/${photoToDelete}`);
      setPhotos(photos.filter((photo) => photo.id !== photoToDelete));
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPhotoToDelete(null);
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-page__title">Gallery</h1>
      <div className="gallery-page__grid">
        {photos
          .slice()
          .reverse()
          .map((photo) => (
            <div key={photo.id} className="gallery-page__photo-card">
              <img
                src={`${baseUrl}/${photo.image}`}
                alt={photo.title}
                className="gallery-page__poster"
              />
              <h2 className="gallery-page__photo-title">{photo.title}</h2>
              <p className="gallery-page__photo-date">
                {formatDate(photo.timestamp)}
              </p>
              <button
                className="gallery-page__delete-button"
                onClick={() => handleDeleteClick(photo.id)}
              >
                &times;
              </button>
            </div>
          ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this photo?"
      />
    </div>
  );
}

export default GalleryPage;
