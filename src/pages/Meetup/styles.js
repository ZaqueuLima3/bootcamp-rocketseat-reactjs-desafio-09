import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      background: rgba(0, 0, 10, 0.2);
      color: rgba(255, 255, 255, 0.7);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      height: 100px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      padding: 10px 15px;
      background: rgba(0, 0, 10, 0.2);
      color: rgba(255, 255, 255, 0.7);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
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
