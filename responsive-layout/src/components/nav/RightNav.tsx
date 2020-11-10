import React, { FC } from 'react';
import styled from 'styled-components';

type RightNavProps = {
    open?: boolean
}

const Ul = styled.ul<RightNavProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav:FC<RightNavProps> = (prop) => {
    return (
        <Ul open={prop.open}>
            <li><a href='#'>首页</a></li>
            <li><a href='#'>商品</a></li>
            <li><a href='#'>订单</a></li>
            <li><a href='#'>联系我们</a></li>
            <li><a href='#'>个人信息</a></li>
        </Ul>
    )
}

export default RightNav
