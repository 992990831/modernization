import React, { FC } from 'react';
import { Container, Box, BoxTitle, BoxText } from "./Style";


export interface Data{
    id: number,
    bgColor: string,
    title: string,
    text:string
}

interface ListProps{
    Data: Data[]
}

export const List:FC<ListProps> = (prop) => {
    return (
        <Container>
            {prop.Data.map(box => (
                <Box key={box.id} bgColor={box.bgColor}>
                    <BoxTitle>{box.title}</BoxTitle>
                    <BoxText>{box.text}</BoxText>
                </Box>
            ))}
        </Container>
    );
}

