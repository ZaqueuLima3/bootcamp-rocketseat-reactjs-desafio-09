import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 10, 0.2);
    color: rgba(255, 255, 255, 0.7);
    font-size: 24px;
  }

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 300px;
  }

  input {
    display: none;
  }
`;
