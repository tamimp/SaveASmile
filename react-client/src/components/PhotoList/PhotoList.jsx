import { Link } from "react-router-dom";

function PhotoList({ photos, selectedPhoto }) {
  return (
    <ul>
      {photos
        .filter((photo) => photo.id !== selectedPhoto.id)
        .map((photo) => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default PhotoList;
