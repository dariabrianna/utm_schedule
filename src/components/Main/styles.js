import styled from "styled-components";

export const Main = styled.div`
  margin: 30px 30px 0 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
  position: relative;
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
    font-style: normal;
    font-weight: bold;
    padding: 5px;
  }

  .background-color {
    background-color: #d8e4f5;
  }

  .days_of_week {
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
    font-style: normal;
    font-weight: bold;
    padding: 27px 12px;
    gap: 12px 0;
    & > div {
      text-orientation: upright;
    }
  }
  span {
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
  .date {
    font-weight: bold;
    gap: 4px;
    font-style: normal;
    font-size: 18px;
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: center;
  }
  img {
    position: absolute;
    max-width: 700px;
    width: 100%;
    z-index: -1;
    opacity: 0.1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Mobile = styled.div`
  .header {
    background: rgb(216, 228, 245);
    margin: 0;
    padding: 16px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    color: #212121 !important;
    font-weight: 600;
    font-size: 1rem;
  }
  & > div {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 8px;
    overflow: hidden;
    .item {
      padding: 16px 0;

      p {
        margin: 0;
      }
      .classes {
        margin-top: 12px;
      }
      .teacher {
        margin-top: 12px;
      }
      .name {
        margin-top: 12px;
      }
    }
    .item:not(:last-of-type) {
      border-bottom: 1px solid #ccc;
    }
  }
`;
