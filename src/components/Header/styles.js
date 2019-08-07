import styled from 'styled-components';

export const Container = styled.header`
  background: #00000080;
  display: flex;
  justify-content: center;
`;

export const Content = styled.nav`
  width: 100%;
  max-width: 900px;
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 32px;
  }
`;

export const Profile = styled.aside`
  display: flex;
  align-items: center;

  div {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }

    a {
      color: #fff6;
      margin-top: 5px;
    }
  }

  button {
    background: #d44059;
    border: 0;
    border-radius: 4px;
    padding: 10px 20px;

    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
`;
