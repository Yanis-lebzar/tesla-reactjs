import React from "react";
import styled from "styled-components";
import ModelPageSection from "../components/ModelPageSection";
function ModelSX({ datas, white, position }) {
  return (
    <Container>
      <MainWrapper position={position} background={datas.image}>
        <TitleText white={white}>
          <h1>{datas.title}</h1>
          <p>Plaid</p>
        </TitleText>
        <StatsContainer>
          <StatsText>
            <h2>{datas.range}</h2>
            <h2>{datas.time}</h2>

            <h2>{datas.topSpeed}</h2>

            <h2>{datas.peakPower}</h2>

            <ButtonOrder>Order</ButtonOrder>
          </StatsText>
          <DescriptionText>
            <span>Autonomie</span>
            <span>Range</span>
            <span>Top Speed</span>
            <span>Peak power</span>
          </DescriptionText>
        </StatsContainer>
      </MainWrapper>
      <InsideContainer>
        <h2>Intérieur entièrement nouveau</h2>
      </InsideContainer>
    </Container>
  );
}

export default ModelSX;

const Container = styled.div`
  height: 100vh;
`;
const MainWrapper = styled.div`
  height: 100vh;
  background-image: ${(props) => `url('/images/${props.background}')`};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: ${(props) => (props.position ? "center" : "")};
  overflox: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const TitleText = styled.div`
  padding-top: 15vh;

  h1 {
    color: ${(props) => (props.white ? "white" : "#2b2b2b")};

    font-size: 36px;
    font-weight: 600;
  }
  p {
    color: ${(props) => (props.white ? "white" : "#2b2b2b")};
  }
`;
const StatsText = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  h2 {
    color: white;
    font-size: 30px;
  }
`;

const ButtonOrder = styled.div`
  cursor: pointer;
  padding: 10px;
  border: white 3px solid;
  border-radius: 99px;
  color: white;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;

const DescriptionText = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  span {
    color: white;
    font-size: 16px;
  }
`;

const StatsContainer = styled.div`
  margin-bottom: 80px;
`;

const InsideContainer = styled.div`
  height: 100vh;
  background: url("/images/new-interior.jpg");
  background-size: 100%;
  background-position: cover;
  background-repeat: no-repeat;
  padding-top: 30px;
  box-shadow: inset 0px 190px 80px black;
  h2 {
    color: white;
    font-size: 30px;
  }
`;
