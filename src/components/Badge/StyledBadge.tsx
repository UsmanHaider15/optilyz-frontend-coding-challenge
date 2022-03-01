import styled from "styled-components";

interface Props {
  type: "info" | "error";
}

const StyledBadge = styled.div<Props>`
  color: ${({ type }) => (type === "info" ? "#c12598" : "white")};
  background-color: ${({ type }) => (type === "info" ? "#e8e2e2" : "red")};
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  width: fit-content;
`;

export default StyledBadge;
