import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      background: rgba(0, 0, 10, 0.2);
      color: rgba(255, 255, 255, 0.7);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input {
      height: 50px;
      width: 100%;
      margin-bottom: 10px;
    }

    textarea {
      height: 100px;
      margin-bottom: 10px;
      padding: 10px 15px;
    }

    button {
      margin-top: 10px;
      margin-left: auto;
      width: 180px;
      padding: 10px 0;
      background: #d44059;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const Image = styled.label`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 10, 0.2);
  margin-bottom: 10px;

  color: rgba(255, 255, 255, 0.7);
`;
