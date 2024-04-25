import Vid from "./vedios/cricket.mp4";
function CricVideo(props) {
  return <video src={Vid} height="300px" width="500px" controls muted></video>;
}
export default CricVideo;
