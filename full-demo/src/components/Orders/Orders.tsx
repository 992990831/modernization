import { debug } from 'console';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { orderService, Order } from '../../services/OrderService'

const px2vw = (size:number, width = 1440) => `${(size / width) * 100}vw`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vw;
  max-width: 100%;
  font-size: 2rem;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.div<{bgColor:string}>`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Orders = ()=>{
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(()=>{
      async function getOrder() {
        let response = await orderService.getOrders();
        debugger;
        setOrders((response as any).data);
      }

      getOrder();
    
    }, []);

    return(
        <Layout>
            {orders && orders.map(data => (
                <Box key={data.id} bgColor={'#D5CAFA'}>
                    <BoxTitle>{`订单号:${data.id}`}</BoxTitle>
                    <BoxText>{data.note}</BoxText>
                </Box>
            ))}
        </Layout>
    )
}