import "./Fb.css";
import Video from "../components/video";

function Fb() {
  return (
    <>
      <h2>FOOTBALL</h2>
      <div class="rules">
        <h3>Rules of the Game</h3>
        <hr />
        <ol type="1">
          <p>It is one of the most crucial football rules for the game.</p>
          <li>A football match has two teams playing against each other.</li>
          <li>
            The number of players in each team should be a
            <b>minimum of 7 and must not exceed 11.</b>
          </li>
          <li>
            Four categories of players are there in a football match.
            <b>Goalkeeper, defenders, midfielders, and forwards.</b>
          </li>
          <li>
            There must be one player designated as a goalkeeper in each team. If
            a goalkeeper is unavailable/suspended, any position player can
            become the designated goalkeeper.
          </li>
          <li>
            Each team is led by a captain, whose one official responsibility is
            to represent the team at the coin toss before the kick-off or
            penalty kicks.
          </li>
          <li>
            <em>
              <b>
                Winning the coin toss means your team gets to choose the initial
                direction of play.
              </b>
            </em>
            The direction of both teams switches after half time before the
            second half starts. The team that loses the toss does the first
            kick-off and starts.
          </li>
        </ol>
      </div>
      <div class="info">
        <h3>Player information in FootBall</h3>
        <hr />
        <p>
          The player formation is not exactly one of the football rules, it is a
          football strategy that constitutes how players in a team position
          themselves in relation to each other on the football field.
        </p>
        <ul>
          <li>
            A player's position in a formation typically defines whether a
            player has a more defensive or attacking role.
          </li>
          <li>
            Formations are described by usually three or four numbers in order
            to denote how many players are in each row of the formation, from
            defense to offense. For example, the "4–5–1" formation has four
            defenders, five midfielders, and a single forward.
          </li>
          <li>
            Different formations are used depending on how a team wishes to play
            in a football match. A team may switch formations between or during
            the game for tactical reasons.
          </li>
        </ul>
        <div class="infoimg">
          <a href="https://en.wikipedia.org/wiki/Football">
            <img
              src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_22/zenrik_images/Group-265-16593475786629.png?v=1659347579"
              alt="Ground details"
            />
          </a>
        </div>
      </div>
      <div class="cards">
        <h3>Disciplinary Cards in Football</h3>
        <hr />
        <ul>
          <p>
            There are two disciplinary cards in football: Red and Yellow cards.
            These colors were first introduced at the 1970 Football World Cup
            and are in use ever since.
          </p>
          <li>Yellow means the player is only cautioned and given a warning</li>
          <li>
            Red card means dismissal from the game for that particular player
          </li>
          <li>
            Two yellow cards in the same match for one player also result in the
            player’s dismissal
          </li>
        </ul>
        <div class="cardsimg">
          <img
            src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_22/zenrik_images/Layer-1-16593477671519.png?v=1659347767"
            alt="cards"
          />
        </div>
      </div>
      <div class="ground">
        <h3>Football Ground Measurement</h3>
        <hr />
        <ol type="1">
          <li>
            A standard football ground measurement is 105 x 68 meters. Various
            football ground sizes exist but the size can never be smaller than
            the certified length and breadth by the international football body.
          </li>
          <li>
            The length of the field, called ‘the touchline’
            <b>
              must be 90 to 120 meters while the width, known as the “goal
              line”, should be between 45 to 90 meters.
            </b>
            Goals are located in the center of each goal line and are 7.32 meter
            wide.
          </li>
          <li>
            The football pitch is split with a half-way line and a
            <em>
              <b>center circle with a radius of 9.15 meters.</b>
            </em>
          </li>
          <li>
            Other crucial areas of a football field include the penalty area,
            the goal area and the penalty spots. The goal area is a rectangular
            zone centered on the goal starting 5.5 meter out from both goal
            posts and extending 5.5 meter into the pitch.
          </li>
          <li>
            <b>
              <u>
                The penalty area is the larger section around the goal area that
                is 16.5 m from the posts and 16.5 m out.
              </u>
            </b>
            For penalty kicks, the penalty spot is centered at 11 m from the
            goal line. The corner arc radius is set at 1 meter.
          </li>
        </ol>
        <div class="groundimg">
          <img
            src="https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_august_22/zenrik_images/Group-259-16593481414981.png?v=1659348142"
            alt="football ground measurement"
          />
        </div>
      </div>
      <div class="greatplayers">
        <h3>Great players of the Game</h3>
        <hr />
        <div class="playersimg">
          <hr />
          <div class="player">
            <img
              src="https://i.cbc.ca/1.6679437.1670534667!/fileImage/httpImage/1245424178.jpg"
              alt="ronaldo"
            />
            <h2>Ronaldo</h2>
          </div>
          <div class="player">
            <img
              src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
              alt="messi"
            />
            <h2>Messi</h2>
          </div>

          <br />
          <br />
        </div>
      </div>
      <div className="video">
        <div className="video">
          <Video />
        </div>
      </div>
    </>
  );
}
export default Fb;
