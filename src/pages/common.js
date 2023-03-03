import styled, { css } from "styled-components";

export const Inner = styled.div`
width: 1200px;
margin: 0 auto;
`

export const Section = styled.section`
padding: 100px 0;
`

export const Btn = styled.button`
background: transparent;
border: none;
line-height: 1.5;
padding: 0 20px;
border: 1px solid #333;
font-size: 12px;
cursor: pointer;

${props => props.color && css`
    border-color: ${props.color};
`}
`