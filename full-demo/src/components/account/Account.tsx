import { debug } from 'console';
import React, { FC, useState } from 'react';
import styled from "styled-components";
import { authervice, UserInfo } from '../../services/AuthService'

const Layout = styled.div`
  position: absolute;
    left: 0;
    top: 0;
    width: 90vw;
    height: 75vh;
    background-color: #ffeedd;
  margin: 5vw;
  max-width: 100%;
  font-size: 2rem;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const SignInButton = styled.a`
  font-size: 2rem;
  color: blue;
  height: 50px;
`;

const SignOutButton = styled.a`
  font-size: 2rem;
  color: red;
  height: 50px;
`;

const ResultArea = styled.div`
  font-size: 2rem;
  color: grey;
  margin-top: 5vh;
  text-align: center;
`

const LoadingArea = styled.div`
  font-size: 1rem;
  color: grey;
  margin-top: 5vh;
  text-align: center;
`

export const Account = () => {
  const [userInfo, setUserInfo] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  function login() {
    setLoading(true);

    authervice.authenticate('andy', '123456').then(() => {
      setTimeout(() => {
        let userInfo = localStorage.getItem('auth_token')
        setUserInfo(userInfo);
        setLoading(false);
      }, 500)

    });

  }

  function logout() {
    localStorage.removeItem('auth_token');
    setUserInfo(null);
  }

  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        {
          userInfo ?
            <SignOutButton onClick={logout} href='javascript:void(0)'>登出</SignOutButton> :
            <SignInButton onClick={login} href='javascript:void(0)'>登录</SignInButton>
        }
      </div>

      {
        loading && <LoadingArea>登录中......</LoadingArea>
      }
      <ResultArea>
        {userInfo}
      </ResultArea>
    </Layout>
  )
}