import React from "react";
import "./About.css";
import BackButton from "./BackButton";

function About() {
  return (
    <section className="about-section">
      <BackButton className="is-fixed" />
      
      {/* Japanese decorative elements */}
      <div className="japanese-decoration">
        <div className="cherry-blossoms">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="blossom" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}>
              <svg className="blossom-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21 7.9 20.1 7 19 7C17.9 7 17 7.9 17 9C17 10.1 17.9 11 19 11C20.1 11 21 10.1 21 9ZM3 9C3 7.9 3.9 7 5 7C6.1 7 7 7.9 7 9C7 10.1 6.1 11 5 11C3.9 11 3 10.1 3 9ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z" fill="#ff69b4"/>
                <circle cx="12" cy="12" r="3" fill="#ff1493"/>
              </svg>
            </div>
          ))}
        </div>
        <div className="bamboo-stalks">
          <div className="bamboo bamboo-1">
            <svg className="bamboo-svg" viewBox="0 0 24 24" fill="none">
              <rect x="10" y="2" width="4" height="20" fill="#228b22"/>
              <rect x="9" y="4" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="8" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="12" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="16" width="6" height="2" fill="#32cd32"/>
            </svg>
          </div>
          <div className="bamboo bamboo-2">
            <svg className="bamboo-svg" viewBox="0 0 24 24" fill="none">
              <rect x="10" y="2" width="4" height="20" fill="#228b22"/>
              <rect x="9" y="4" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="8" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="12" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="16" width="6" height="2" fill="#32cd32"/>
            </svg>
          </div>
          <div className="bamboo bamboo-3">
            <svg className="bamboo-svg" viewBox="0 0 24 24" fill="none">
              <rect x="10" y="2" width="4" height="20" fill="#228b22"/>
              <rect x="9" y="4" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="8" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="12" width="6" height="2" fill="#32cd32"/>
              <rect x="9" y="16" width="6" height="2" fill="#32cd32"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="container">
        <header className="about-header">
          <div className="japanese-title">
            <h1 className="main-title">
              <span className="kanji">私たちについて</span>
              <span className="romaji">About Us</span>
            </h1>
            <div className="title-decoration">
              <div className="line line-left"></div>
              <div className="circle">
                <svg className="circle-svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" fill="#ff6b6b" opacity="0.8"/>
                  <circle cx="12" cy="12" r="4" fill="#fff"/>
                </svg>
              </div>
              <div className="line line-right"></div>
            </div>
          </div>
          <p className="tagline">// あなたのアニメ聖域 //</p>
        </header>

        <div className="about-content">
          <div className="content-wrapper">
            <div className="anime-character">
              <div className="character-icon">
                <svg className="character-svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#ffdbac"/>
                  <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="#ffdbac"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#ff6b6b"/>
                  <circle cx="9" cy="7" r="1" fill="#000"/>
                  <circle cx="15" cy="7" r="1" fill="#000"/>
                  <path d="M9 10c0.5 1 1.5 1.5 3 1.5s2.5-0.5 3-1.5" stroke="#000" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              <div className="character-speech">
                <p>
                  アニメの広大な宇宙で、私たちのプラットフォームは物語、キャラクター、そしてその芸術の背後にある文化を愛するファンのための空間です。
                </p>
                <p className="english-translation">
                  In the vast universe of anime, our platform is a space for fans who love stories, characters, and the culture behind the art.
                </p>
              </div>
            </div>

            <div className="manga-panel">
              <div className="panel-header">
                <span className="panel-title">
                  <svg className="manga-icon" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff"/>
                    <rect x="5" y="5" width="14" height="2" fill="#333"/>
                    <rect x="5" y="9" width="10" height="1" fill="#666"/>
                    <rect x="5" y="12" width="12" height="1" fill="#666"/>
                    <rect x="5" y="15" width="8" height="1" fill="#666"/>
                  </svg>
                  MANGA PANEL
                </span>
              </div>
              <div className="panel-content">
                <p className="japanese-text">
                  「すべてのフレームが物語を語る」
                </p>
                <p className="english-text">
                  "WHERE EVERY FRAME TELLS A STORY"
                </p>
              </div>
            </div>

            <div className="anime-character">
              <div className="character-icon">
                <svg className="character-svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#ffdbac"/>
                  <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="#ffdbac"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4ecdc4"/>
                  <circle cx="9" cy="7" r="1" fill="#000"/>
                  <circle cx="15" cy="7" r="1" fill="#000"/>
                  <path d="M9 10c0.5 1 1.5 1.5 3 1.5s2.5-0.5 3-1.5" stroke="#000" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              <div className="character-speech">
                <p>
                  情熱的なオタクによって作られた私たちの目標は、アニメの古典と現代のヒットの両方を探索するための、清潔で誠実で楽しい環境を提供することです。
                </p>
                <p className="english-translation">
                  Created by passionate otakus, our goal is to provide a clean, honest, and enjoyable environment for exploring anime classics and modern hits alike.
                </p>
              </div>
            </div>

            <div className="promise-section">
              <div className="promise-header">
                <span className="promise-icon">
                  <svg className="lantern-svg" viewBox="0 0 24 24" fill="none">
                    <rect x="10" y="2" width="4" height="6" fill="#ff6b6b"/>
                    <rect x="8" y="8" width="8" height="12" fill="#ff8c8c"/>
                    <rect x="11" y="20" width="2" height="2" fill="#8b4513"/>
                    <circle cx="12" cy="12" r="2" fill="#ffd700"/>
                    <rect x="11" y="14" width="2" height="4" fill="#ffd700"/>
                  </svg>
                </span>
                <h3>Our Promise (私たちの約束)</h3>
              </div>
              <div className="promise-content">
                <p>
                  <strong>誠実なレビュー、おすすめ、そして新しくて古典的なアニメファンの両方のための更新。</strong>
                </p>
                <p className="english-translation">
                  Honest reviews, recommendations, and updates for both new and classic anime fans.
                </p>
              </div>
            </div>

            <div className="community-call">
              <div className="call-icon">
                <svg className="theater-svg" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4ecdc4"/>
                  <circle cx="12" cy="8" r="3" fill="#ffdbac"/>
                  <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="#ffdbac"/>
                  <path d="M9 6c0.5-1 1.5-1.5 3-1.5s2.5 0.5 3 1.5" stroke="#000" strokeWidth="1" fill="none"/>
                  <circle cx="10" cy="7" r="0.5" fill="#000"/>
                  <circle cx="14" cy="7" r="0.5" fill="#000"/>
                </svg>
              </div>
              <p>
                コミュニティに参加して、あなたの次のお気に入りのアニメを発見してください。
              </p>
              <p className="english-translation">
                Join our community and discover your next favorite anime.
              </p>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="feature-card sakura-theme">
            <div className="feature-icon">
              <svg className="sakura-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21 7.9 20.1 7 19 7C17.9 7 17 7.9 17 9C17 10.1 17.9 11 19 11C20.1 11 21 10.1 21 9ZM3 9C3 7.9 3.9 7 5 7C6.1 7 7 7.9 7 9C7 10.1 6.1 11 5 11C3.9 11 3 10.1 3 9ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z" fill="#ff69b4"/>
                <circle cx="12" cy="12" r="3" fill="#ff1493"/>
              </svg>
            </div>
            <h3>Vast Archive (広大なアーカイブ)</h3>
            <p>
              時代を超えたアニメへのアクセス、永遠の古典から現在のお気に入りまで。
            </p>
            <p className="english-feature">
              Access decades of anime, from timeless classics to current favorites.
            </p>
          </div>
          
          <div className="feature-card zen-theme">
            <div className="feature-icon">
              <svg className="zen-svg" viewBox="0 0 24 24" fill="none">
                <rect x="10" y="2" width="4" height="20" fill="#228b22"/>
                <rect x="9" y="4" width="6" height="2" fill="#32cd32"/>
                <rect x="9" y="8" width="6" height="2" fill="#32cd32"/>
                <rect x="9" y="12" width="6" height="2" fill="#32cd32"/>
                <rect x="9" y="16" width="6" height="2" fill="#32cd32"/>
                <circle cx="12" cy="20" r="1" fill="#8b4513"/>
              </svg>
            </div>
            <h3>Honest Reviews (誠実なレビュー)</h3>
            <p>
              本物のアニメ愛好家からの偏見のない洞察。
            </p>
            <p className="english-feature">
              Unbiased insights from real anime enthusiasts.
            </p>
          </div>
          
          <div className="feature-card dragon-theme">
            <div className="feature-icon">
              <svg className="dragon-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5l-1 1c-1 1-1 3 0 4l2 2c1 1 3 1 4 0l1-1c1 1 3 1 4 0l2-2c1-1 1-3 0-4l-1-1c1-1 2-3 2-5 0-4-3-7-7-7z" fill="#ff8c00"/>
                <circle cx="8" cy="8" r="1" fill="#ffd700"/>
                <circle cx="16" cy="8" r="1" fill="#ffd700"/>
                <path d="M10 12c0.5-1 1.5-1.5 2-1.5s1.5 0.5 2 1.5" stroke="#000" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <h3>Community (コミュニティ)</h3>
            <p>
              ファンとつながり、シリーズについて議論し、おすすめを共有してください。
            </p>
            <p className="english-feature">
              Connect with fans, discuss series, and share recommendations.
            </p>
          </div>
        </div>

        {/* Japanese cultural elements */}
        <div className="cultural-elements">
          <div className="torii-gate">
            <svg className="torii-svg" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="18" width="20" height="4" fill="#8b4513"/>
              <rect x="4" y="6" width="2" height="12" fill="#8b4513"/>
              <rect x="18" y="6" width="2" height="12" fill="#8b4513"/>
              <rect x="6" y="4" width="12" height="2" fill="#dc143c"/>
              <rect x="8" y="2" width="8" height="2" fill="#dc143c"/>
            </svg>
          </div>
          <div className="lanterns">
            <span className="lantern">
              <svg className="lantern-svg" viewBox="0 0 24 24" fill="none">
                <rect x="10" y="2" width="4" height="6" fill="#ff6b6b"/>
                <rect x="8" y="8" width="8" height="12" fill="#ff8c8c"/>
                <rect x="11" y="20" width="2" height="2" fill="#8b4513"/>
                <circle cx="12" cy="12" r="2" fill="#ffd700"/>
                <rect x="11" y="14" width="2" height="4" fill="#ffd700"/>
              </svg>
            </span>
            <span className="lantern">
              <svg className="lantern-svg" viewBox="0 0 24 24" fill="none">
                <rect x="10" y="2" width="4" height="6" fill="#ff6b6b"/>
                <rect x="8" y="8" width="8" height="12" fill="#ff8c8c"/>
                <rect x="11" y="20" width="2" height="2" fill="#8b4513"/>
                <circle cx="12" cy="12" r="2" fill="#ffd700"/>
                <rect x="11" y="14" width="2" height="4" fill="#ffd700"/>
              </svg>
            </span>
            <span className="lantern">
              <svg className="lantern-svg" viewBox="0 0 24 24" fill="none">
                <rect x="10" y="2" width="4" height="6" fill="#ff6b6b"/>
                <rect x="8" y="8" width="8" height="12" fill="#ff8c8c"/>
                <rect x="11" y="20" width="2" height="2" fill="#8b4513"/>
                <circle cx="12" cy="12" r="2" fill="#ffd700"/>
                <rect x="11" y="14" width="2" height="4" fill="#ffd700"/>
              </svg>
            </span>
          </div>
          <div className="waves">
            <svg className="waves-svg" viewBox="0 0 24 24" fill="none">
              <path d="M2 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" fill="#4ecdc4"/>
              <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" fill="#45b7d1"/>
              <path d="M14 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" fill="#96ceb4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
