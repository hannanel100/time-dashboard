import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "./Card";

const StyledGridItem = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  div:first-of-type {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledIcon = styled(Image)`
  justify-self: flex-end;
`;
export const GridItem = ({ item, clicked, icon }) => {
  const [time, setTime] = useState(item.timeframes.daily);
  const [text, setText] = useState("Yesterday");
  useEffect(() => {
    switch (clicked) {
      case 0:
        setTime(item.timeframes.daily);
        setText("Yesterday");
        break;
      case 1:
        setTime(item.timeframes.weekly);
        setText("Last Week");
        break;
      case 2:
        setTime(item.timeframes.monthly);
        setText("Last Month");
        break;
      default:
        setTime(item.timeframes.daily);
        setText("Yesterday");
        break;
    }
  }, [clicked]);

  return (
    <StyledGridItem color={icon.color}>
      <div>
        <StyledIcon src={icon.icon} width={70} height={70} layout='fixed' />
      </div>
      <Card title={item.title} time={time} text={text} />
    </StyledGridItem>
  );
};
