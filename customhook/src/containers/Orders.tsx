import React, { FC } from 'react';

interface OrderModel {
    OrderNumber?:string;
    amount?:number;

}

const data: OrderModel[] = [
    {
        OrderNumber: 'PO001',
        amount: 100000
    },
    {
        OrderNumber: 'PO002',
        amount: 100000
    },
    {
        OrderNumber: 'PO003',
        amount: 100000
    },
    {
        OrderNumber: 'PO004',
        amount: 100000
    },
    {
        OrderNumber: 'PO005',
        amount: 100000
    },
]


export const Orders: FC<OrderModel[]> = props => (
    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
      {
          data.map( user => {
              return(
              <div>{user.OrderNumber}</div>
              )
          })
      }
    </div>
  );