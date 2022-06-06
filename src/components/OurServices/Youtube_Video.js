import PropTypes from "prop-types";

const Youtube_Video = () => (
  <div className="video-responsive">
    <iframe
      src="https://www.youtube.com/embed/F4Kybq8U3nE"
      frameBorder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default Youtube_Video;
