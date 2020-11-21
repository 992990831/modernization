import React, { FC } from 'react';
import styled from "styled-components";

const Layout = styled.div`
  position: absolute;
    left: 0;
    top: 0;
    width: 90vw;
    height: 75vh;
    background-color: #6D4DC2;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vw;
  max-width: 100%;
  font-size: 2rem;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Account = ()=>{
    return(
        <Layout>
            I'm Andy
        </Layout>
    )
}