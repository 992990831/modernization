import React, { FC } from 'react';
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vw;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const NotFound = ()=>{
    return(
        <Layout>
            访问的页面不存在
        </Layout>
    )
}