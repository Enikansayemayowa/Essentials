import React from "react";
import TaibatHomePage from "./taibatHomePage";
import TaibatHomePageTwo from "./taibatHomePageTwo";
import TaibatHomePageThree from "./taibatHomePageThree";
import TaibatHomePageFour from "./taibatHomePageFour";
import styled from "styled-components";
import { BsChatDots } from "react-icons/bs";

const TaibatHomePagee = () => {
  return (
    <Container>
      <Wrapper>
        <Button>
          <BsChatDots />
        </Button>
        <TaibatHomePage />
        <TaibatHomePageTwo />
      </Wrapper>
      <Wrapper>
        <TaibatHomePageThree />
        <TaibatHomePageFour />
      </Wrapper>
    </Container>
  );
};

export default TaibatHomePagee;

const Container = styled.div``;

const Wrapper = styled.div`
  flex-wrap: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  background: #eeeeee;
  color: black;
  position: fixed;
  right: 20px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  font-size: 35px;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  z-index: 1;

  :hover {
    cursor: pointer;
  }
`;
