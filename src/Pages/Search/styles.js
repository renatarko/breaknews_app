import styled from "styled-components";
import { HomeBody } from "../Home/styles";

export const SearchBody = styled(HomeBody)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ErrorMessage = styled.h3`
  text-align: center;

  font-size: 1.4rem;
`;
