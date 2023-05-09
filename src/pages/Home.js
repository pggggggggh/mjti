import React from "react";
import { styled } from "styled-components";
import MainImage from "../assets/main.png";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <Wrapper>
      <Header>MJTI</Header>
      <Contents>
        <Title>MoonJung Type Indicator</Title>
        <LogoImage>
          <img src={MainImage} width={350} height={350} />
        </LogoImage>
        <Desc>나랑 가장 잘 맞을 것 같은 문정 23학번 선배는?!</Desc>
        <Button style={{ marginTop: "5px" }}>시작!</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20pt;
  margin-top: 30px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 15pt;
  margin-top: 20px;
`;
