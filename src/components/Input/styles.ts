import styled from "styled-components";

export const InputBox = styled.div`
  width: 80%;
  flex-direction: column;
  align-items: flex-start;

  .label {
    font-size: 18px;
  }

  input {
    border: 2px solid #3b3a3a !important;
    border-radius: 5px;
    font-size: 20px;

    padding: 0 10px;

    height: 40px;
    width: 100%;

    margin: 0 auto;

    color: #3b3a3a;
  }
`;
