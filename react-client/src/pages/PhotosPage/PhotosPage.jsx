import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import "./PhotosPage.scss";

function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState(null);
  const [shuffleKey, setShuffleKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await axios.get(`${baseUrl}/photos`);
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setIsLoading(false);
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

  const getRandomTransform = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxOffsetX = viewportWidth * 0.02;
    const maxOffsetY = viewportHeight * 0.02;
    const x = Math.random() * maxOffsetX * 2 - maxOffsetX;
    const y = Math.random() * maxOffsetY * 2 - maxOffsetY;
    const rotation = Math.random() * 20 - 10;
    const zIndex = Math.floor(Math.random() * 1000);

    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
      zIndex,
    };
  }, []);

  const shufflePhotos = () => {
    setShuffleKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="photos-page">
      {isLoading ? (
        <p className="loading">Loading photos...</p>
      ) : (
        <>
          <button
            className="photos-page__shuffle-button"
            onClick={shufflePhotos}
          >
            Shuffle Photos
          </button>
          <div className="photos-page__grid">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="photos-page__photo-card"
                style={getRandomTransform()}
              >
                <img
                  src={`${baseUrl}/${photo.image}`}
                  alt={`Photo, with description: ${photo.title}`}
                  className="photos-page__poster"
                />
                <h2 className="photos-page__photo-title">{photo.title}</h2>
                <p className="photos-page__photo-date">
                  {formatDate(photo.timestamp)}
                </p>
                <button
                  className="photos-page__delete-button"
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
        </>
      )}
    </div>
  );
}

export default PhotosPage;
