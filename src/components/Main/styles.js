import styled from "styled-components";

export const Main = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
  .perechi {
    border-top: none !important;
  }
  div.row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border: 1px solid #cecfd3;
    width: 92px;
    font-family: __Inter_20951f, __Inter_Fallback_20951f;
    font-style: normal;
    font-weight: bold;
    padding: 5px;
  }

  .background-color {
    background-color: #d8e4f5;
  }

  .days_of_week {
    font-family: __Inter_20951f, __Inter_Fallback_20951f;
    font-style: normal;
    font-weight: bold;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    & > div {
      width: 150px;
      border: 1px solid #cecfd3;
      height: auto;
      &:not(:last-child) {
        border-top: none;
      }
    }
    & > p,
    & > .item {
      width: 17%;
      border: 1px solid #cecfd3;
      text-align: center;
      height: auto;
      margin: 0;
      padding: 12px;
      & > p {
        margin-bottom: 6px;
        margin-top: 0 !important;
      }
      &:not(:first-child) {
        border-left: none !important;
        border-top: none;
      }
    }
    &:not(:last-child) {
      p {
        border-bottom: none;
      }
    }
  }
  .perechi {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border: 1px solid hsl(0, 0%, 80%);
    width: 92px;
    font-family: __Inter_20951f, __Inter_Fallback_20951f;
    font-style: normal;
    font-weight: bold;
    padding: 27px 12px;
    gap: 12px 0;
    & > div {
      text-orientation: upright;
    }
  }
  span {
    font-family: __Inter_20951f, __Inter_Fallback_20951f;
    font-style: normal;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 6px;
    padding: 1px 9px;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .classes {
    border-color: transparent;
    background-color: #d8e4f5;
    border: 1px solid #d8e4f5;
    border-radius: 6px;
    padding: 2px 4px;
  }
  .teacher {
    border-color: transparent;
    background-color: #95f2d9;
    border: 1px solid #95f2d9;
    border-radius: 6px;
    padding: 2px 4px;
  }
`;
