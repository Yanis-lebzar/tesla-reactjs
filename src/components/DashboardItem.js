import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function DashboardItem(props) {
  return (
    <ItemContainer row={props.row}>
      <img src={props.imageLink} alt='' />
      <TextWrapper row={props.row}>
        <div>
          <p>
            <strong>{props.title}</strong>
          </p>
          {props.descr && <span>{props.descr}</span>}
        </div>
        <Link to={props.link}>{props.linkText}</Link>
      </TextWrapper>
    </ItemContainer>
  );
}

export default DashboardItem;

const ItemContainer = styled.div`
  background: brown;
  height: 217px;
  width: 318px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  border: 1px solid #d4d5d4;
  margin-right: 20px;

  img {
    height: ${(props) => (props.row ? "70%" : "50%")};
    width: 100%;
    object-fit: cover;
    object-position: ${(props) => (props.row ? "center" : "bottom")};
  }
`;

const TextWrapper = styled.div`
  height: ${(props) => (props.row ? "30%" : "50%")};
  width: 100%;
  background: white;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  text-align: start;
  justify-content: space-between;
  font-size: 14px;
  padding: 18px;

  span {
    font-size: 13px;
    color: #858585;
  }

  a {
    text-underline-offset: 2px;
    text-decoration: underline;
    color: #858585;
  }
`;
