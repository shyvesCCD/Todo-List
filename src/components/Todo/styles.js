import styled from "styled-components";

export const Lista = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #21212b;
  width: 400px;
  height: 45px;
  border-radius: 12px;
  padding: 0 0 0 0.5rem;
  margin-bottom: 8px;
  margin-right: 60px;
`;

export const Label = styled.label`
  color: #f9f9f9;
  padding: 0 0 0 0.5rem;
`;

export const Buttom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fc76a1;
  border-radius: 5px;
  outline: none;
  color: #181820;
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const Input = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  margin-right: 10px;
`;
