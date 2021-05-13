import React from "react";
import "./gallery.scss";

import tv from "../../assets/tv.png";
import mobile from "../../assets/mobile.jpg";
import devicePile from "../../assets/device-pile.png";
import boxShot from "../../assets/boxshot.png";
import kids from "../../assets/netflix-kids.png";
function Gallery() {
  return (
    <div className="gallery">
      <div className="card">
        <div
          className="container
          "
        >
          <div className="row">
            <div className="col">
              <h2 className="title">Enjoy on your TV.</h2>
              <p className="sub-title">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="col">
              <div>
                <div className="image-wrapper">
                  <img src={tv} className="image" alt="tv" />
                  <div className="video">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <div className="image-mobile">
                  <img src={mobile} className="image" alt="mobile" />
                  <div className="download-animation">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div className="download-img">
                          <img src={boxShot} className="img" alt="box-shot" />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600 }}>Stranger Things</div>
                          <div style={{ fontSize: "14px", color: "#0071eb" }}>
                            Downloading...
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <img
                          style={{ width: "3em" }}
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                          alt="downloading"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h2 className="title">Download your shows to watch offline.</h2>
              <p className="sub-title">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title">Watch everywhere.</h2>
              <p className="sub-title">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </p>
            </div>
            <div className="col">
              <div>
                <div className="image-wrapper">
                  <img src={devicePile} className="image" alt="tv" />
                  <div className="video">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <div className="image-wrapper">
                  <img src={kids} className="image" alt="kids" />
                </div>
              </div>
            </div>
            <div className="col">
              <h2 className="title">Create profiles for kids.</h2>
              <p className="sub-title">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
