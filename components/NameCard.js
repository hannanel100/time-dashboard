import React from "react";
import Image from "next/image";
import styled from "styled-components";
import profilePic from "../public/image-jeremy.png";
const StyledImage = styled(Image)`
  border-radius: 50%;
`;
const StyledName = styled.p`
  font-size: 2.5rem;
`;
const StyledNameContainer = styled.div`
  flex-grow: 3;
  p {
    margin: 0;
  }
`;
const StyledNameCard = styled.div`
  background: hsl(246, 80%, 60%);
  border-radius: 10px;
  display: flex;
  flex-grow: 4;

  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
`;
const StyledImageContainer = styled.div`
  box-sizing: content-box;
  padding-left: 30px;
  flex-grow: 2;
  display: flex;
  align-items: center;
  & > span {
    border: 3px solid white !important;
    border-radius: 50%;
  }
`;
export const NameCard = () => {
  return (
    <StyledNameCard>
      <StyledImageContainer>
        <StyledImage width={75} height={75} src={profilePic} layout='fixed' />
      </StyledImageContainer>
      <StyledNameContainer>
        <p>Report For</p>
        <StyledName>Jeremy Robson</StyledName>
      </StyledNameContainer>
    </StyledNameCard>
  );
};
