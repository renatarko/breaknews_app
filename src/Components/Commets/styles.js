import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: auto;
  background-color: #f5f5f5;
  padding: 1rem;
  padding-top: 3rem;
  border-radius: 0.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .btn-close {
    position: absolute;
    top: 0.3rem;
    right: 0.2rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const CommentsForm = styled.form`
  display: flex;
  gap: 0.5rem;
  position: relative;
`;

export const Comments = styled.div`
  overflow: auto;
  flex: 1;
  padding: 0.5rem;
  position: relative;
`;

export const Comment = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    color: rgb(11, 173, 227);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const CommentsInput = styled.textarea`
  min-width: 100%;
  min-height: 7rem;
  max-height: 10rem;
  padding: 0.5rem;
  outline: none;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  &:focus {
    border-color: rgb(11, 173, 227);
  }
`;
