import React, { FC } from 'react';
import styled from "styled-components";

const Layout = styled.div`
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

export const Orders = ()=>{
    return(
        <Layout>
            这里是订单！
        </Layout>
    )
}