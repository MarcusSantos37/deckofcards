import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  align-items: baseline;

  justify-content: center;
`;

export const Content = styled.div`
  width: 270px;

  border-radius: 10px;

  background-color: #ffffff;

  .info {
    display: flex;
    flex-direction: column;

    gap: 10px;

    padding: 10px;

    .descriptionBox {
      span {
        font-size: 14px;
      }
    }

    .title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;

      .name {
        width: 50%;

        font-weight: bold;
        text-align: left;

        margin-right: auto;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .name,
    .buttonDescription {
      text-align: center;
    }
  }

  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  gap: 10px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
