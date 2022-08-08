import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  border-radius: 10px;
  padding: 20px;
  width: 500px;
  gap: 40px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffffff;

  span {
    margin-bottom: 10px;
    font-size: 24px;

    color: #3b3a3a;

    font-weight: bold;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
