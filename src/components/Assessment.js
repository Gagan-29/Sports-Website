import { redirect } from "react-router-dom";
import "./Assessmentstyle.css";
function Assessment() {
  const handleSubmit = () => {
    alert("Your answers are successfully submitted");
  };
  return (
    <>
      <div>
        <h1>Assessment page</h1>
      </div>
      <div class="ques">
        <p>Q1.Who won the world cup in wcc cricket in 2007</p>
        <input type="radio" />
        Australia <input type="radio" />
        India
        <input type="radio" />
        England <input type="radio" />
        Pakistan
      </div>
      <div class="ques">
        <p>Q2.Who won the wcc football in 2018</p>
        <input type="radio" />
        France <input type="radio" /> Argentina
        <input type="radio" />
        Croatia <input type="radio" />
        Brazil
      </div>

      <div class="ques">
        <p>
          Q3.Which of the following country won Football world Cup maximum
          times?
        </p>
        <input type="radio" />
        Germany <input type="radio" />
        Italy
        <input type="radio" />
        Argentina <input type="radio" />
        Brazil
      </div>
      <div class="ques">
        <p>
          Q4.Who among the following player scores highest number of goals in
          Footbal World Cup?
        </p>
        <input type="radio" />
        Jurgen Klinsmann <input type="radio" />
        Meradona
        <input type="radio" />
        Miroslave Klose <input type="radio" /> Pele
      </div>
      <div class="btn">
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </>
  );
}
export default Assessment;
