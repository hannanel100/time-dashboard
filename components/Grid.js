import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GridItem } from "./GridItem";
import { NameCard } from "./NameCard";
import play from "../public/icon-play.svg";
import work from "../public/icon-work.svg";
import study from "../public/icon-study.svg";
import exercise from "../public/icon-exercise.svg";
import social from "../public/icon-social.svg";
import selfCare from "../public/icon-self-care.svg";

const StyledGrid = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: auto;
  place-content: center;
  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2vw;
  }
  gap: 6.6vw;
  p {
    padding-left: 30px;
  }
`;
const StyledNameCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 1;
  grid-row: span 2;
  background-color: hsl(235, 46%, 20%);
  border-radius: 10px;
`;
const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding-top: 10px;
`;
const StyledP = styled.p`
  margin: 0;
  cursor: pointer;
  flex-grow: 1;
  color: ${(props) =>
    props.isClicked ? "hsl(236, 100%, 87%)" : "hsl(235, 45%, 61%)"};
  &:hover {
    color: hsl(236, 100%, 87%);
  }
`;
export const Grid = ({ dataList }) => {
  //   const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(0);
  const gridItemsIcons = [
    { color: "hsl(15, 100%, 70%)", icon: work },
    { color: "hsl(195, 74%, 62%)", icon: play },
    { color: "hsl(348, 100%, 68%)", icon: study },
    { color: "hsl(145, 58%, 55%)", icon: exercise },
    { color: "hsl(264, 64%, 52%)", icon: social },
    { color: "hsl(43, 84%, 65%)", icon: selfCare },
  ];
  return (
    <StyledGrid>
      <StyledNameCard>
        <NameCard />
        <ToggleContainer>
          <StyledP onClick={() => setClicked(0)} isClicked={clicked == 0}>
            Daily
          </StyledP>
          <StyledP onClick={() => setClicked(1)} isClicked={clicked === 1}>
            Weekly
          </StyledP>
          <StyledP onClick={() => setClicked(2)} isClicked={clicked === 2}>
            Monthly
          </StyledP>
        </ToggleContainer>
      </StyledNameCard>
      {dataList.map((item, index) => (
        <GridItem item={item} clicked={clicked} icon={gridItemsIcons[index]} />
      ))}
    </StyledGrid>
  );
};
