import React from "react";

function ListCheck18() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 18{">"}{" "}
      </div>
      <br />
      <div className="question">슬픔을 느꼈다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer18" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer18" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer18" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer18" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck18;
