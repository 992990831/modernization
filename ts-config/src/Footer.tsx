import React, { FC } from 'react';

interface FooterProps {
    Name: string,
    ID: number
}

export const Footer:FC<FooterProps> = ({Name, ID}) => {
    return(
        <>
            `${ID} - ${Name}`
        </>
    )
}