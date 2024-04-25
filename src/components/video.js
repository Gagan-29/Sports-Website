import Vid from "./vedios/football.mp4";
function video(props) {
  return <video src={Vid} height="300px" width="500px" controls muted></video>;
}
export default video;
