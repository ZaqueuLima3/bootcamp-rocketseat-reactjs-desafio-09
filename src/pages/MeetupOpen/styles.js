import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    a {
      margin-top: 10px;
      margin-left: auto;
      width: 180px;
      padding: 10px 25px;
      background: #d44059;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;

      &:first-child {
        margin-right: 15px;
        background: #4dbaf9;
      }
    }
  }
`;

export const Content = styled.div`
  p {
    margin: 20px 0;
    color: #fff;
    line-height: 24px;
  }

  footer {
    display: flex;

    span {
      color: #d1d1d1;
      margin: 0 20px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 10, 0.2);
  margin-bottom: 10px;

  color: rgba(255, 255, 255, 0.7);
`;
