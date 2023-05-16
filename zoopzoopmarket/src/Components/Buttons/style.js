import styled, { css } from "styled-components";

const variantCSS = {
    primary: css`
        background-color: ${({ theme }) => theme.color.white};
    `,
};

const shapeCSS = {
    default: css``,
    shape1: css`
        border-radius: 10px;
        border: 2px solid ${({ theme }) => theme.color.primary};
    `,
    shape2: css`
        border: 2px solid ${({ theme }) => theme.color.subLightGreen};
    `,
    round: css`
        border-radius: 50%;
    `,
};

const sizeCSS = {
    small: css`
        width: 40px;
        max-width: 60px;
        height: 40px;
        padding: 16px 0;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 9;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    `,
};

export const Button = styled.button`
    ${({ variant }) => variantCSS[variant]}
    ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
    border: none;
    :hover {
        opacity: 0.8;
    }
`;