// import bg from "./images";
import Fbsport from "./Fbsport.js";
import Footer from "./Footer.js";
import "./Home.css";
import Cric from "./images/cricket-modified.png";
import Fb from "./images/fb1-modified.png";
import Sport from "./sport.js";

function Home() {
  return (
    <div className="box-container">
      <div className="cricket-box">
        <Sport name="cricket" src={Cric} />
      </div>
      <div className="football-box">
        <Fbsport name="Football" src={Fb} />
      </div>
    </div>
  );
}
export default Home;
