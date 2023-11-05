import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => (props.color ? props.color : "#4d31d7")};
    padding: 9px 16px;
    color: ${(props) => (props.color ? "black" : "#ffffff")};
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.01px;
    border: ${(props) => (props.color ? "1px solid" : "none")};
    cursor: pointer;
`;
