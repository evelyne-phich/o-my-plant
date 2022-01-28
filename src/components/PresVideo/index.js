import Proptypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import "./style.scss";

const PresVideo = () => (
  <div className="pres-video">
    <h1>Découvrir O’My Plant</h1>
    <ReactPlayer url="https://www.youtube.com/watch?v=Jh5oX0VRnzk" />
  </div>
);

PresVideo.propTypes = {};

export default PresVideo;
