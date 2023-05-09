import React from "react";
import { styled } from "styled-components";
import MainImage from "../assets/main.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>MJTI</Header>
      <Contents>
        <Title>:MoonJung Type Indicator</Title>
        <LogoImage>
          <img alt="문헌정보학과" src={MainImage} width={350} height={350} />
        </LogoImage>
        <Desc>나랑 가장 잘 맞을 것 같은 문정 23학번 선배는?!</Desc>
        <Button
          variant="primary"
          size="lg"
          style={{ marginTop: "5px", fontFamily: "Suite", fontWeight: "bold" }}
          onClick={handleClickButton}
        >
          시작!
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(150deg, #ffffff 0%, #addff7 100%);
`;

const Header = styled.div`
  font-size: 40pt;
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
  margin-top: -25px;
`;

const Title = styled.div`
  font-size: 18pt;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`;
