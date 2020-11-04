import React, { FC } from 'react';

interface HeaderProps {
    Name?: string,
    ID: number
}

export const Header:FC<HeaderProps> = props => {
    return(
        <>
            `${props.ID} - ${props.Name}`
        </>
    )
}