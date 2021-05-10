import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCalcScore from "../redux/hooks/useCalcScore";

interface IProps {
  listNumber: string;
  title: string;
  nextPage: string;
}

const SurveyReversed = (props: IProps) => {
  const [Checked, setChecked] = useState(1);
  const { score, onCalcScore } = useCalcScore();

  return (
    <div style={{ padding: "20px 0" }} className="main">
      <div className="question-title">
        {"<"}
        {props.listNumber}
        {">"}
      </div>
      <br />
      <div className="question">{props.title}</div>
      <br />
      <div className="questions">
        <input
          type="radio"
          value={3}
          name="score"
          onChange={() => setChecked(3)}
        />{" "}
        극히 드물다 <br />
      </div>
      <div className="questions">
        <input
          type="radio"
          value={2}
          name="score"
          onChange={() => setChecked(2)}
        />{" "}
        가끔 <br />
      </div>
      <div className="questions">
        <input
          type="radio"
          value={1}
          name="score"
          onChange={() => setChecked(1)}
        />{" "}
        자주 <br />
      </div>
      <div className="questions">
        <input
          type="radio"
          value={0}
          name="score"
          onChange={() => setChecked(0)}
        />{" "}
        거의 대부분 <br />
      </div>
      <div>
        <Link onClick={() => onCalcScore(Checked)} to={props.nextPage}>
          다음 페이지
        </Link>
      </div>
    </div>
  );
};

export default SurveyReversed;
