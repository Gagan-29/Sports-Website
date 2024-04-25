import "./cricket.css";
import CricVideo from "../components/CricVedio.js";
function Cricket() {
  return (
    <>
      <h1>SPORTS INFORMATION</h1>
      <h2>CRICKET</h2>
      <div class="gameplay">
        <h3>Laws and GamePlay</h3>
        <hr />
        <p>
          In cricket, the rules of the game are specified in a code called The
          Laws of Cricket (hereinafter called "the Laws") which has a global
          remit. There are 42 Laws (always written with a capital "L"). The
          earliest known version of the code was drafted in{" "}
          <b>1744 and, since 1788,</b>it has been owned and maintained by its
          custodian, the Marylebone Cricket Club (MCC) in London.
        </p>
        <div class="groundimg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cricket_field_parts.svg/300px-Cricket_field_parts.svg.png"
            alt="ground"
          />
        </div>
      </div>
      <div class="playingarea">
        <h3>Playing Area</h3>
        <hr />
        <p>
          Cricket is a bat-and-ball game played on a cricket field (see image of
          cricket pitch and creases) between two teams of eleven players
          each.The field is usually circular or oval in shape and the edge of
          the playing area is marked by a boundary, which may be a fence, part
          of the stands, a rope, a painted line or a combination of these; the
          boundary must if possible be marked along its entire length. In the
          approximate centre of the field is a rectangular pitch (see image,
          below) on which a wooden target called a wicket is sited at each end;
          the wickets are placed 22 yards (20 m) apart. The pitch is a flat
          surface 10 feet (3.0 m) wide, with very short grass that tends to be
          worn away as the game progresses (cricket can also be played on
          artificial surfaces, notably matting). Each wicket is made of three
          wooden stumps topped by two bails.
        </p>
        <div class="area">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cricket_pitch.svg/1125px-Cricket_pitch.svg.png"
            alt="Cricket pitch"
          />
        </div>
      </div>
      <div class="rule">
        <h3>Rules of the Game</h3>
        <hr />
        <ul>
          <li>
            Cricket is a team game played between two teams of <b>11 players</b>{" "}
            each. The 11 players constitute batsmen, bowlers and a wicket
            keeper.
          </li>

          <li>
            The match is usually played on a large circular or oval shaped
            ground. There is also a smaller inner oval with a{" "}
            <em>
              <b>22 yard pitch at the centre</b>
            </em>
            . At each end of the pitch is a set of three wickets with two wooden
            bails atop them.
          </li>

          <li>
            The match is broken down into separate sections called balls, which
            is one delivery of the ball bowled by a bowler to a batsman.{" "}
            <b>Six of these balls form an over.</b>
          </li>

          <li>
            An innings is made of a specific number of overs or a certain amount
            of time. <b> A one day</b>
            international match consists of <b>50 overs per innings</b>, a{" "}
            <em>
              <b>twenty twenty</b>
            </em>
            international match consists of <b>20 overs per innings</b> whereas
            a test match is limited to a certain number of days which is 5 with
            90 overs to be played on each day.
          </li>

          <li>
            The match will also have <b>two on-field umpires</b> that make the
            decisions of the game. There is also a{" "}
            <em>
              <b>third umpire that monitors the game through a screen</b>
            </em>{" "}
            and helps with uncertain or close decisions.
          </li>
        </ul>
      </div>
      <div class="greatplayers">
        <h3>Great players of the Game</h3>
        <hr />
        <div class="cricplayersimg">
          <div class="cricplayer">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZjVlNWQ4YmItOGVkYi00MzM4LWFkZTUtYjA5OTVkNTNkMWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Virat kholi"
            />
            <h2>Virat Kholi</h2>
          </div>
          <div class="cricplayer">
            <img
              src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
              alt="Dhoni"
            />
            <h2>MS Dhoni</h2>{" "}
          </div>
          <div class="cricplayer">
            <img
              src="https://drop.ndtv.com/albums/SPORTS/sachin-photo/sachin-world-cup.jpg"
              alt="Sachin"
            />
            <h2>Sachin Tendulkar</h2>
          </div>
        </div>
      </div>
      <div className="video">
        <CricVideo />
      </div>
    </>
  );
}
export default Cricket;
