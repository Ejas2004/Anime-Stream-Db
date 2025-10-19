import { NavLink } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="anime-landing">
        <div className="overlay"></div>
        <video autoPlay loop muted playsInline className="bg-video">
          <source
            src="https://motionbgs.com/media/1194/vegeta-ultra-ego.960x540.mp4"
            type="video/mp4"
          />
        </video>

        {/* Floating particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>

        {/* Main content */}
        <div className="content">
          <h1 className="title">
            <span className="title-main">Welcome to</span>
            <span className="title-brand">AniVerse</span>
            
          </h1>
          
          <p className="subtitle">
            Stream, explore, and relive your favorite anime adventures in stunning quality.
            <br />
            <span className="subtitle-highlight">Join millions of anime fans worldwide!</span>
          </p>

          <div className="buttons">
            <NavLink
              to="/watch"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button className="btn watch">
                <span className="btn-icon">▶</span>
                <span className="btn-text">Watch Now</span>
                <div className="btn-glow"></div>
              </button>
            </NavLink>
            <NavLink to="/community">
              <button className="btn join">
                <span className="btn-icon">👥</span>
                <span className="btn-text">Join Community</span>
              </button>
            </NavLink>
          </div>

          <div className="features-preview">
            <div className="feature-item">
              <div className="feature-icon">🎬</div>
              <span>HD Streaming</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <span>Mobile Ready</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <span>Fast Loading</span>
            </div>
          </div>
        </div>

        {/* Enhanced glow effects */}
        <div className="anime-glow glow-1"></div>
        <div className="anime-glow glow-2"></div>
        <div className="anime-glow glow-3"></div>
      </div>
    </>
  );
}

export default Home;
