import styled from "styled-components";

interface ButtonProps {
  width?: string;
  bg?: string;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.bg ? props.bg : "#3b3a3a")};
  color: ${(props) => (props.color ? props.color : "#ffffff")};

  font-weight: bold;
  font-size: 20px;

  :hover {
    border: 1px solid #ffffff;
  }

  :disabled {
    opacity: 0.6;
  }

  width: ${(props) => (props.width ? props.width : "50%")};

  margin: 0 auto;
`;
