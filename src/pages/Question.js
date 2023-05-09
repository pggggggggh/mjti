import React from "react";
import { styled } from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { Questions } from "../assets/data/Questions";
import { useNavigate } from "react-router-dom";

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

    var newScore = totalScore;
    if (no === 0) {
      var index = Questions.findIndex((e) => e.id === questionNo);
      for (var key in Questions[index].scoreA) {
        var idx = totalScore.findIndex((e) => e.id === key);
        var newObject = {
          id: totalScore[idx].id,
          score: totalScore[idx].score + Questions[index].scoreA[key],
        };
        newScore.splice(idx, 1, newObject);
      }
    } else {
      var index = Questions.findIndex((e) => e.id === questionNo);
      for (var key in Questions[index].scoreB) {
        var idx = totalScore.findIndex((e) => e.id === key);
        var newObject = {
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
      navigate("/result");
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
            style={{ width: "40vh", minHeight: "200px", fontSize: "15pt" }}
            variant="danger"
            onClick={() => handleClickButton(0)}
          >
            {Questions[questionNo].answerA}
          </Button>
          <Button
            style={{
              width: "40vh",
              minHeight: "200px",
              fontSize: "15pt",
              marginLeft: "30px",
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
`;
const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
