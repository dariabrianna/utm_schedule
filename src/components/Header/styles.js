import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-height: 100px;
  padding-bottom: 1rem;
  padding-top: 1rem;
  /* border-bottom-color: hsl(var(--secondary));
  border-bottom: 1px solid #e5e7eb; */
  box-sizing: border-box;
  img {
    width: 102px;
  }
  .filter {
    width: 200px;
  }
  & > input {
    height: 38px;
    background-color: transparent;
    width: 300px;
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 80%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
  }
  svg {
    border: 1px solid hsl(0, 0%, 80%);
    padding: 7px;
    border-radius: 8px;
    cursor: pointer;
  }
  .switchers {
    display: flex;
    gap: 16px;
    & > div {
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        margin-bottom: 0;
        margin-top: 0;
      }
      input {
        width: 20px;
        height: 20px;
        margin-top: 0;
      }
    }
  }
`;
