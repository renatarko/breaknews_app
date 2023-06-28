import styled from "styled-components";

import { ProfileWithoutImage } from "../Cards/styles";

export const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  background-color: #f5f5f5;
  padding: 1rem;
  padding-top: 3rem;
  border-radius: 0.4rem;
  z-index: 50;
  margin: 0 0.7rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .btn-close {
    position: absolute;
    top: 0rem;
    right: 0;
    margin: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const CommentsForm = styled.form`
  display: flex;
  gap: 0.5rem;
  position: relative;
`;

export const Comments = styled.div`
  overflow: auto;
  padding: 0.5rem;
  padding-bottom: 1.5rem;
  position: relative;
`;

export const Comment = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${ProfileWithoutImage} {
    width: 3rem;
    height: 3rem;
  }
`;

export const ImageUser = styled.img`
  max-width: 5%;
  min-width: 1rem;
  clip-path: circle();
`;

export const CommentByUser = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0.8rem;
  border-radius: 0px 20px 20px 20px;

  .comment {
    margin-top: 0.5rem;
  }
`;

export const UserAndCreated = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .username {
    font-size: 1rem;
  }
`;

export const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .btn-more {
    cursor: pointer;
    transition: 0.2s;

    :hover {
      transform: rotate(90deg);
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
    border-color: #06489e;
  }
`;
