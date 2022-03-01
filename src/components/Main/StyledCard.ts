import styled from "styled-components";

export const StyledCard = styled.div`
  width: 700px;
  border: 1px solid #cbcdcf;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  text-align: left;
`;

export const StyledCardImage = styled.img`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  width: 100%;
`;

export const StyledCardBody = styled.div`
  padding: 1rem;
`;

export const StyledCardTitle = styled.div`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;

export const StyledCardDescription = styled.p`
  font-size: 1.125rem;
  margin: 1rem 0;
  overflow: hidden;
`;

export const StyledCardDetails = styled.div`
  display: "flex";
  flex-direction: "column";
`;
