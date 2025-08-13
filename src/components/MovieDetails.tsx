import { type Movie} from './Interfaces'

interface MovieDetailsProps{
  movie: Movie;
  visible: boolean; // Whether the modal/pop-up is visible
  onClose: () => void; // Callback to close the modal
};

function MovieDetails({ movie, visible, onClose }: MovieDetailsProps) {
  if (!visible) return null; // If not visible, do not render the component

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensures the modal appears above other elements
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
          width: "80%",
          maxWidth: "600px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Movie Poster Section */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <img
            src={movie.imageUrl}
            alt={`${movie.movieName} poster`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Movie Info Section */}
        <div style={{ flex: 2, padding: "16px", position: "relative" }}>
          <h2 style={{ margin: "0 0 8px 0", fontSize: "20px", color: "#333" }}>
            {movie.movieName} ({movie.releaseYear})
          </h2>
          <p
            style={{
              margin: "2px 0",
              fontSize: "14px",
              color: "#666",
            }}
          >
            Rating: {movie.rating} / 5
          </p>
          <p
            style={{
              margin: "2px 0",
              fontSize: "14px",
              color: "#666",
            }}
          >
            Duration: {movie.duration}
          </p>
          <p
            style={{
              margin: "16px 0",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#444",
            }}
          >
            {movie.description}
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              padding: "4px 8px",
              border: "none",
              backgroundColor: "#f44336",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;