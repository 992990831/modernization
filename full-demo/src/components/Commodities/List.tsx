import React, { FC } from 'react';
import { Container, Box, BoxTitle, BoxText } from "./Style";

interface Data{
    id: number,
    bgColor: string,
    title: string,
    text:string
}

const dataList: Data[] = [
    {
      id: Math.random(),
      title: "商品1",
      text: "描述",
      bgColor: "#D5CAFA"
    },
    {
      id: Math.random(),
      title: "商品2",
      text: "描述",
      bgColor: "#EDA9A9"
    },
    {
      id: Math.random(),
      title: "商品3",
      text: "描述",
      bgColor: "#F2EE8D"
    },
    {
      id: Math.random(),
      title: "商品4",
      text: "描述",
      bgColor: "#9FEACD"
    }
  ];

 const CommodityList:FC = (prop) => {
     console.log('商品列表');
    return (
        <Container>
            {dataList.map(data => (
                <Box key={data.id} bgColor={data.bgColor}>
                    <BoxTitle>{data.title}</BoxTitle>
                    <BoxText>{data.text}</BoxText>
                </Box>
            ))}
        </Container>
    );
}

export default CommodityList;