import { Link } from "react-router-dom";
import "./Home.css";

function Fbsport(props) {
  return (
    <div className="cricket">
      <h1>{props.name}</h1>
      <div className="cricbox">
        <div className="cricbtn">
          <button>
            <Link to="/football">Check now</Link>
          </button>
        </div>
        <div className="cric-img">
          <img src={props.src}></img>
        </div>
      </div>
    </div>
  );
}
export default Fbsport;
