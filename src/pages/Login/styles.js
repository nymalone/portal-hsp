import styled from "styled-components";

import Back from "../../assets/back_login.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  background: #fff;
  background-image: url(${Back});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Img = styled.div`
  margin-right: 300px;
  margin-bottom: 250px;
  p {
    width: 600px;
    font-size: 15px;
  }
`;

export const Sidebar = styled.div`
  height: 100vh;
  width: 410px;
  background: #fff;
  box-sizing: border-box;
  padding-top: 85px;
  box-shadow: 4px 0px 34px -5px rgba(0, 0, 0, 0.5);

  p {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: #747474;
  }

  hr {
    margin-left: 34%;
    margin-top: 20px;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 30%;
  }
`;

export const Google = styled.div`
  display: flex;
  justify-content: center;
  button {
    color: #fff;
    font-size: 13px;
    font-weight: bolder;
    background: #d73d32;
    height: 37px;
    border: 0;
    border-radius: 1px;
    width: 35%;
    box-shadow: 3px 0px 10px -3px rgba(0, 0, 0, 0.3);
    &:hover {
      box-shadow: 4px 0px 20px -5px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Form = styled.form`
  box-sizing: border-box;
  width: 410px;
  background: #fff;
  padding: 40px;
  padding-top: 10px;
  h6 {
    text-align: center;
    margin-bottom: 20px;
  }
  span {
    color: #000;
    margin-bottom: 15px;
    font-size: 12.5px;
    text-align: center;
    width: 100%;
  }
  a {
      color: #21467e;
      text-decoration: none;
      font-weight: bold;
  }
  button {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    background: #21467e;
    height: 37px;
    border: 0;
    border-radius: 1px;
    width: 100%;
    &:hover {
      box-shadow: 4px 0px 20px -5px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    a {
    color: #21467e;
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
  }
`;
export const Input = styled.input`
  height: 40px;
  margin-bottom: 15px;
  padding: 0 20px;
  color: black;
  font-size: 15px;
  width: 100%;
  border: 0;
  border-bottom: 0.5px solid #ddd;
  &::placeholder {
    color: gray;
  }
  &:focus {
    border-bottom: 1.5px solid #d73d32;
  }
`;


