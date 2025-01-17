import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 38.4rem;
  height: min-content;
  padding: 2.4rem 1.6rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #2196f3;
`;

export const CommentWrapper = styled.p`
  color: #011fbb;
  font-size: 1.6rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;

  img {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: 1.2rem;
    border-radius: 50%;
  }

  span {
    font-size: 1.4rem;
    color: #001c33;
  }
`;
