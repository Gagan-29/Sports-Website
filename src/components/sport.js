import "./Home.css";
import { Link } from "react-router-dom";
function Sport(props) {
  return (
    <div className="cricket">
      <h1>{props.name}</h1>
      <div className="cricbox">
        <div className="cric-img">
          <img src={props.src}></img>
        </div>
        <div className="cricbtn">
          <button>
            <Link to="/cricket">Check now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sport;
