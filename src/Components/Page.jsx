import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Page.css";
import BackButton from "./BackButton";

function Page() {
  const location = useLocation();
  const movie = location.state?.movie;
  const [activeVideoTab, setActiveVideoTab] = useState('teaser');

  if (!movie) {
    return (
      <div className="pg-container">
        <div className="pg-error">
          <h2>No movie data found</h2>
          <p>Please go back and select a movie to view details.</p>
        </div>
      </div>
    );
  }

  // YouTube search categories with dynamic URLs
  const videoData = {
    teaser: {
      title: "Official Teaser",
      searchQuery: `${movie.title} official teaser trailer`,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' official teaser trailer')}`
    },
    highlights: {
      title: "Highlights & Clips",
      searchQuery: `${movie.title} highlights clips`,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' highlights clips')}`
    },
    interviews: {
      title: "Cast Interviews",
      searchQuery: `${movie.title} cast interview`,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' cast interview')}`
    },
    reviews: {
      title: "Reviews & Reactions",
      searchQuery: `${movie.title} review reaction`,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' review reaction')}`
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="pg-container">
      <BackButton className="is-fixed" />
      {/* Backdrop banner */}
      <div
        className="pg-banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="pg-banner-overlay">
          <div className="pg-banner-content">
            <h1 className="pg-title">{movie.title}</h1>
            <div className="pg-banner-meta">
              <span className="pg-release">{new Date(movie.release_date).getFullYear()}</span>
              <span className="pg-rating">
                <span className="rating-stars">{renderStars(movie.vote_average)}</span>
                <span className="rating-text">{movie.vote_average}/10</span>
              </span>
              <span className="pg-language">{movie.original_language.toUpperCase()}</span>
            </div>
            <div className="pg-action-buttons">
              <button className="btn btn-primary">
                <span className="btn-icon">▶</span>
                Watch Now
              </button>
              <button className="btn btn-secondary">
                <span className="btn-icon">+</span>
                Add to Watchlist
              </button>
              <button className="btn btn-secondary">
                <span className="btn-icon">♡</span>
                Like
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pg-main-content">
        <div className="pg-poster-section">
          <img
            className="pg-poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="pg-poster-overlay">
            <button className="btn btn-play">
              <span className="btn-icon">▶</span>
            </button>
          </div>
        </div>

        <div className="pg-info">
          <div className="pg-overview-section">
            <h2 className="pg-section-title">Overview</h2>
            <p className="pg-overview">{movie.overview}</p>
          </div>

          <div className="pg-details-grid">
            <div className="detail-item">
              <span className="detail-label">Popularity</span>
              <span className="detail-value">{Math.round(movie.popularity)}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Vote Count</span>
              <span className="detail-value">{movie.vote_count.toLocaleString()}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Language</span>
              <span className="detail-value">{movie.original_language.toUpperCase()}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Release Date</span>
              <span className="detail-value">{new Date(movie.release_date).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="pg-genres">
            <span className="genres-label">Genres:</span>
            <div className="genres-list">
              {movie.genre_ids.map((genre, index) => (
                <span key={index} className="genre-tag">{genre}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Videos Section */}
      <div className="pg-videos-section">
        <h2 className="pg-section-title">Videos & Media</h2>
        
        <div className="video-tabs">
          {Object.keys(videoData).map((tab) => (
            <button
              key={tab}
              className={`video-tab ${activeVideoTab === tab ? 'active' : ''}`}
              onClick={() => setActiveVideoTab(tab)}
            >
              {videoData[tab].title}
            </button>
          ))}
        </div>

        <div className="video-content">
          <div className="youtube-search-container">
            <div className="search-info">
              <h3>Search YouTube for "{videoData[activeVideoTab].searchQuery}"</h3>
              <p>Click the button below to explore {videoData[activeVideoTab].title.toLowerCase()} videos on YouTube</p>
            </div>
            <div className="youtube-link-container">
              <a 
                href={videoData[activeVideoTab].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="youtube-search-btn"
              >
                <span className="youtube-icon">📺</span>
                <span className="btn-text">Search on YouTube</span>
                <span className="external-link-icon">↗</span>
              </a>
            </div>
            <div className="search-preview">
              <div className="preview-card">
                <div className="preview-icon">🎬</div>
                <div className="preview-text">
                  <h4>Dynamic Search Results</h4>
                  <p>Get real-time YouTube videos related to "{movie.title}"</p>
                </div>
              </div>
              <div className="preview-card">
                <div className="preview-icon">🔍</div>
                <div className="preview-text">
                  <h4>Curated Categories</h4>
                  <p>Find teasers, highlights, interviews, and reviews</p>
                </div>
              </div>
              <div className="preview-card">
                <div className="preview-icon">⚡</div>
                <div className="preview-text">
                  <h4>Always Updated</h4>
                  <p>Latest videos and trending content automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;



