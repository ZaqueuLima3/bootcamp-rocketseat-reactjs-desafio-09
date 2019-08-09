import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  display: flex;
  margin: 50px auto;
  flex-direction: column;

  ul {
    margin-top: 30px;

    li {
      padding: 15px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);

      a {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
      }

      span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 32px;
  }

  a {
    background: #d44059;
    border: 0;
    border-radius: 4px;
    padding: 10px 35px;

    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
`;
