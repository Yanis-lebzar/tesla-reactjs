import React from "react";
import styled from "styled-components";
import data from "../data/carInfo.json";

function ModelPageSection() {
  return (
    <Container>
      <TitleText>
        <h1>Model S</h1>
        <p>Plaid</p>
      </TitleText>
    </Container>
  );
}

export default ModelPageSection;
const Container = styled.div`
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  overflox: hidden;
`;

const TitleText = styled.div`
  padding-top: 15vh;

  h1 {
    color: #2b2b2b;
    font-size: 36px;
    font-weight: 600;
  }
`;
