import React from "react";

function ChartReport(props) {
  const {
    AvarageScore1,
    AvarageScore2,
    AvarageScore3,
    NormalScore1,
    NormalScore2,
    NormalScore3,
  } = props;
  const data = {
    labels: ["MixOrMatch", "Hangman", "DxBall"],
    datasets: {
      label: "Game Score Comparision",
      data: [1, 2, 3],
    },
  };
  return <Line data={data} />;
}

export default ChartReport;
