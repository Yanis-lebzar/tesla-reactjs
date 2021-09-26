import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { login, logout, selectUser } from "../features/car/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Header({ out, white }) {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const history = useHistory();

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Link to='/'>
        <img src='/images/logo.svg' alt='' />
      </Link>

      <Menu white={white}>
        {cars &&
          cars.map((car, index) => (
            <Link key={index} to={car.link}>
              {car.name}
            </Link>
          ))}
      </Menu>
      <RightMenu white={white}>
        <Link to='/'>Shop</Link>
        <Link to='/login'>Tesla Account</Link>
        {out && <Link onClick={logoutOfApp}> Logout</Link>}
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <Link key={index} to={car.link}>
                {car.name}
              </Link>
            </li>
          ))}
        <li>
          <Link to='/'>Existing Inventory</Link>
        </li>
        <li>
          <Link to='/'>Used Inventory</Link>
        </li>
        <li>
          <Link to='/'>Trade-in</Link>
        </li>
        <li>
          <Link to='/'>Cybertruck</Link>
        </li>
        <li>
          <Link to='/'>Roadaster</Link>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: ${(props) => (props.white ? "white" : "")};
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    color: ${(props) => (props.white ? "white" : "")};
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  display: flex;
  flex-direction: column;
  width: 300px;
  list-style: none;
  text-align: start;
  padding: 20px;
  z-index: 77;
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translate(100%)")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
