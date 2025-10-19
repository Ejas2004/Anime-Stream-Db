import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

function BackButton({ className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`back-btn ${className}`.trim()}
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <span className="back-icon">←</span>
      <span className="back-text">Back</span>
    </button>
  );
}

export default BackButton;


