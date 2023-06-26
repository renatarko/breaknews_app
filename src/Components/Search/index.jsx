import { Search } from "lucide-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > .input_search {
    width: 100%;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;

    :focus {
      border-color: #0037806e;
    }
  }

  > .icon_search {
    position: absolute;
    top: 1;
    right: 0.2rem;
    color: #757575;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 1.5rem;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 7rem;
    padding: 1.5rem 3rem;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    z-index: 100;
  }
`;

export const SearchNav = ({ onChange }) => {
  return (
    <Wrapper>
      <Container>
        <input
          className="input_search"
          type="text"
          placeholder="Pesquise uma notícia"
          onInput={onChange}
        />
        <Search className="icon_search" />
      </Container>
    </Wrapper>
  );
};
