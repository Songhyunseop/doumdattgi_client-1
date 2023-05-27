import { css } from "@emotion/react";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Arita-dotum";
    font-size: 16px;
    font-weight: 400;
    color: #111;
    letter-spacing: -0.03em;
  }

  /* 결제 모달창 CSS */
  .ChargeModal .ant-space {
    width: 384px;
    height: 34px;
    border: none;
    border-bottom: 2px solid black;
    padding: 0px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
  }

  /* 결제 드랍박스 CSS */

  .ChargeBox .ant-space {
    width: 384px;
    display: flex;
    justify-content: space-between;
  }

  .ChargeBox .ant-space-item {
    color: #828282;
  }

  .ChargeDrop .ant-dropdown-menu {
    border-radius: 6px;
    box-shadow: 0px 6px 10px rgba(80, 80, 80, 0.25);
  }

  .ChargeDrop .ant-dropdown-menu-item {
    height: 50px;
  }

  .ChargeDrop a::after {
    border-bottom: 1px solid rgba(5, 5, 5, 0.1);
  }

  /* 환불 모달 창 */
  .RefundModal {
  }
  //

  /* TimePicker */
  .setTimeBtn .ant-space {
    width: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  /* TimePicker */
  :where(.css-dev-only-do-not-override-15rg2km).ant-picker-dropdown
    .ant-picker-time-panel-column {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  :where(.css-dev-only-do-not-override-15rg2km).ant-btn.ant-btn-sm {
    padding: 0 26px;
    height: 26px;
  }

  /* 헤더 드롭다운 */
  .header {
    width: 120px;
  }

  /* 아바타 업로드 */
  &:where(
      .css-dev-only-do-not-override-15rg2km
    ).ant-upload-wrapper.ant-upload-picture-circle-wrapper
    .ant-upload.ant-upload-select,
  &:where(
      .css-dev-only-do-not-override-15rg2km
    ).ant-upload-wrapper.ant-upload-picture-circle-wrapper
    .ant-upload-list.ant-upload-list-picture-circle
    .ant-upload-list-item-container {
    height: 130px;
    width: 130px;
    margin: 0;
  }

  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_T.otf");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_L.otf");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_M.otf");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_SB.otf");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Arita-dotum";
    src: url("/fonts/Arita4.0_B.otf");
    font-weight: 700;
    font-style: normal;
  }

  // .Toast UI 툴팁 색상
  .toastui-editor-tooltip .text {
    color: white;
  }

`;
