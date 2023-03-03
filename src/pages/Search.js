import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";


const Input = styled.input`
border: none;
outline: none;
background: transparent;
border-bottom: 1px solid #343434;
margin-right: 10px;
`

const Button = styled.button`
font-size: 20px;
background: transparent;
border: none;
outline: none;
`
export const Search = () => {
    const [txt, setTxt] = useState('');
    return (
        <>
            <Input type="text"
                onChange={(e) => setTxt(e.target.value)} />
            <Button><BsSearch /></Button>
        </>
    )
}