import React from "react";
import { styled } from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Results } from "../assets/data/Results";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const winner = searchParams.get("winner");
  console.log("winner", winner);
  var idx = Results.findIndex((e) => e.id === winner);
  console.log("idx", idx);
  if (idx === -1) navigate("/");

  const handleClickButton = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Header>나랑 가장 잘 맞을 것 같은 문정 23학번 선배는?!</Header>
      <Contents>
        <Image>
          <img alt="결과" src={Results[idx].image} width={350} height={350} />
        </Image>
        <Title>{Results[idx].name}</Title>
        <Desc>{Results[idx].desc}</Desc>
        <Button
          variant="danger"
          size="lg"
          style={{ marginTop: "20px", fontFamily: "Suite", fontWeight: "bold" }}
          href={`http://instagram.com/${Results[idx].insta}`}
        >
          DM 걸러 가기!
        </Button>
        <Button
          variant="primary"
          size="lg"
          style={{
            marginTop: "5px",
            fontFamily: "Suite",
            fontWeight: "",
          }}
          onClick={handleClickButton}
        >
          다시하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  padding-top: 50px;
  height: 120vh;
  width: 100%;
  background-image: linear-gradient(150deg, #ffffff 0%, #addff7 100%);
`;

const Header = styled.div`
  font-size: 24pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Suite";
  font-weight: bold;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Suite";
`;

const Title = styled.div`
  font-size: 48pt;
  font-weight: normal;
`;

const Image = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  width: 80%;
  text-align: center;
`;
