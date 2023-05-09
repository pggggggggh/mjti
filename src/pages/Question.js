import React from "react";
import { styled } from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { Questions } from "../assets/data/Questions";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "ms", score: 0 },
    { id: "cy", score: 0 },
    { id: "jw", score: 0 },
    { id: "hk", score: 0 },
    { id: "kt", score: 0 },
    { id: "sa", score: 0 },
    { id: "sm", score: 0 },
    { id: "js", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleClickButton = (no) => {
    //var found = obj.find(e => e.name === 'John');

    var index, idx;
    var newScore = totalScore;
    var newObject;
    if (no === 0) {
      index = Questions.findIndex((e) => e.id === questionNo);
      for (let key in Questions[index].scoreA) {
        idx = totalScore.findIndex((e) => e.id === key);
        newObject = {
          id: totalScore[idx].id,
          score: totalScore[idx].score + Questions[index].scoreA[key],
        };
        newScore.splice(idx, 1, newObject);
      }
    } else {
      index = Questions.findIndex((e) => e.id === questionNo);
      for (let key in Questions[index].scoreB) {
        idx = totalScore.findIndex((e) => e.id === key);
        newObject = {
          id: totalScore[idx].id,
          score: totalScore[idx].score + Questions[index].scoreB[key],
        };
        newScore.splice(idx, 1, newObject);
      }
    }

    setTotalScore(newScore);
    console.log(totalScore);
    setQuestionNo(questionNo + 1);

    if (Questions.length === questionNo + 1) {
      var mxi = 0;
      for (var i = 0; i < totalScore.length; i++) {
        if (totalScore[mxi].score < totalScore[i].score) mxi = i;
      }
      var winner = totalScore[mxi].id;
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          winner: winner,
        })}`,
      });
    }
  };

  return (
    <Wrapper>
      <ProgressBar
        variant="info"
        now={(questionNo / 6) * 100}
        style={{ marginTop: "20px" }}
      />
      <Contents>
        <Title>{Questions[questionNo].title} </Title>
        <ButtonGroup>
          <Button
            style={{ width: "30vh", minHeight: "120px", fontSize: "15pt" }}
            variant="danger"
            onClick={() => handleClickButton(0)}
          >
            {Questions[questionNo].answerA}
          </Button>
          <Button
            style={{
              width: "30vh",
              minHeight: "120px",
              fontSize: "15pt",
              marginTop: "20px",
            }}
            variant="danger"
            onClick={() => handleClickButton(1)}
          >
            {Questions[questionNo].answerB}
          </Button>
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(150deg, #ffffff 0%, #addff7 100%);
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Suite";
  margin-top: 30px;
`;
const Title = styled.div`
  font-size: 20pt;
  text-align: center;
`;
const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
