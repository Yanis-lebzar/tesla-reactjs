import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PaymentIcon from "@material-ui/icons/Payment";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import DashboardItem from "../components/DashboardItem";
function Account() {
  return (
    <Container>
      <SideMenuWrapper>
        <li>
          <Link>
            <IconWrapper>
              <HomeIcon />
            </IconWrapper>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link>
            <IconWrapper>
              <PersonOutlineIcon />
            </IconWrapper>
            <span>Profile Settings</span>
          </Link>
        </li>
        <li>
          <Link>
            <IconWrapper>
              <PaymentIcon />
            </IconWrapper>
            <span>Profile Settings</span>
          </Link>
        </li>
        <li>
          <Link>
            <IconWrapper>
              <BatteryCharging90Icon />
            </IconWrapper>
            <span>Charging</span>
          </Link>
        </li>
        <li>
          <Link>
            <IconWrapper>
              <img src='/images/loot-box.png' />
            </IconWrapper>
            <span>Loot Box</span>
          </Link>
        </li>
        <li>
          <Link>
            <IconWrapper>
              <img src='/images/tee.png' />
            </IconWrapper>
            <span>Order History</span>
          </Link>
        </li>
        <li>
          <Link>
            <IconWrapper>
              <img src='/images/logout.png' />
            </IconWrapper>
            <span>Sign Out</span>
          </Link>
        </li>
      </SideMenuWrapper>
      <DashboardWrapper>
        <h1>Dashboard</h1>
        <ItemsWrapper>
          <FirstLineWrapper>
            <DashboardItem
              title='Order Tesla Solar'
              descr='Produce energy to power your Tesla life'
              linkText='View Solar'
              link='/'
              imageLink='/images/solar-marketing.jpg'
            />
            <DashboardItem
              title='Reserve a Car'
              descr='Browse our models'
              linkText='Shop Now'
              link='/'
              imageLink='/images/four-cars.png'
            />
          </FirstLineWrapper>
          <DashboardItem
            title='Purchased a car from a third party?'
            descr=''
            linkText='Add'
            link='/'
            imageLink='/images/party-car.jpg'
            row
          />
        </ItemsWrapper>
      </DashboardWrapper>
    </Container>
  );
}

export default Account;

const Container = styled.div`
  max-width: 1680px;
  height: 100vh;
  overflow: hidden;
  padding: 130px 40px;
  display: flex;
  margin: 0 auto;
`;

const SideMenuWrapper = styled.div`
  min-width: 300px;
  height: auto;
  list-style: none;
  margin-top: 60px;

  li {
    margin-bottom: 30px;
  }
  a {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
      font-weight: 600;
      font-size: 18px;
      color: #717477;
    }
  }
`;

const IconWrapper = styled.div`
  padding: 5px;

  img {
    height: 24px;
  }
`;

const DashboardWrapper = styled.div`
  height: 100%;
  width: auto;

  h1 {
    font-size: 38px;
    margin-bottom: 20px;
    text-align: start;
    color: #838383;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstLineWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
