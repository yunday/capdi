import React from "react";
import Layout from "../../../partials/Layout";
import MMSESurvey from "../../../partials/MMSESurvey";
import { lists } from "../QuestionLists";

const MQ15 = () => {
  return (
    <Layout>
      <MMSESurvey
        listNumber={lists[15].listNumber}
        title={lists[15].title}
        nextPage={lists[15].nextPage}
        answer={lists[15].answer}
      />
    </Layout>
  );
};

export default MQ15;
