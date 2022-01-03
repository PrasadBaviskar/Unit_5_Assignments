import styled from "styled-components";

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;

  & > input,
  textarea {
    height: 25px;
    margin: 3px;
    padding: 3px;
  }

  & > textarea {
    height: 50px;
  }
`;
