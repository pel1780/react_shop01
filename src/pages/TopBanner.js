import styled from "styled-components"
import { BsXSquare } from "react-icons/bs";
import { Inner, Btn } from "./common"
import { useState } from "react";

const TopBannerWrapper = styled.div`
display: flex;
align-items: center;
background: #f9f9f9;
height: 100px;
font-weight: 300;
overflow: hidden;
transition: 0.5s;

&.on{
    height: 0;
}

div{
    position: relative;

    .close{
        position: absolute;
        inset: 0 0 auto auto;
        font-size: 20px;
    }
}

h2{
    font-size: 24px;
    margin-bottom: 10px;
}

button{
    margin: 0 0 0 20px;
}
`

export const TopBanner = ({ DEFAULT, DEFAULT_CONTENTS }) => {

    const [on, setOn] = useState(false);
    return (
        <TopBannerWrapper className={on && 'on'}>
            <Inner>
                <h2>{DEFAULT_CONTENTS[0].tit} EVENT</h2>
                <p>{DEFAULT_CONTENTS[0].desc}<Btn>MORE</Btn></p>
                <BsXSquare className="close" onClick={() => setOn(true)} />
            </Inner>
        </TopBannerWrapper>
    )
}