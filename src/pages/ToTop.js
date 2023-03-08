import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect } from "react";

const ToTopWrapper = styled.div`
    position: fixed;
    inset: auto 50px 50px auto;
    font-size: 40px;
    color: tan;
`
const ToTop = () => {
    useEffect(() => {

    }, [])
    // gsap.registerPlugin(Scroll)
    return (
        <ToTopWrapper onClick={() => { console.log(11) }}>
            <BsFillArrowUpCircleFill />
        </ToTopWrapper>
    )
}

export default ToTop;