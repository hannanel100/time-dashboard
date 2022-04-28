import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsl(235, 46%, 20%);
  color: hsl(236, 100%, 87%);
  border-radius: 10px;
  p:nth-child(3) {
    color: hsl(235, 45%, 61%);
  }
`;
const StyledTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;
const StyledCurrentTime = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
`;
const StyledPreviousTime = styled.p`
  font-size: 0.875rem;
`;

export const Card = ({ title, icon, time, text }) => {
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledCurrentTime>{time.current}hrs</StyledCurrentTime>
      <StyledPreviousTime>
        <span>{text} - </span>
        {time.previous}hrs
      </StyledPreviousTime>
    </StyledCard>
  );
};
