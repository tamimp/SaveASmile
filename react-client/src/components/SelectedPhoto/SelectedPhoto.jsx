function SelectedPhoto({ selectedPhoto }) {
  const baseUrl = import.meta.env.VITE_API_URL;
  return (
    <div>
      {selectedPhoto && (
        // if selectedPhoto is not null or undefined  (i.e. if a photo is selected) then display the photo details
        <div>
          <h2>{selectedPhoto.title}</h2>
          <img
            src={`${baseUrl}/${selectedPhoto.image}`}
            alt={selectedPhoto.title}
          />
          <p>{selectedPhoto.genre}</p>
          <ul>
            {selectedPhoto.reviews.map((review) => (
              <li key={review.id}>
                <p>
                  User: {review.user} Rating: {review.rating}
                </p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
          {}
        </div>
      )}
    </div>
  );
}

export default SelectedPhoto;
