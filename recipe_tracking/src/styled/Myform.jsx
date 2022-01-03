import styled from "styled-components";

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  box-shadow: 1px 2px 5px #630000;
  padding: 15px;

  & > input,
  textarea {
    height: 25px;
    margin: 3px;
    padding: 3px;
    background-color: #dfd8ca;
    color: #630000;
    border: none;
    border-bottom: 1px solid #630000;
  }

  & > textarea {
    height: 50px;
  }

  & > button {
    height: 30px;
    background-color:#630000;
    color:white;
  }
`;
