import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";

const ToTopWrapper = styled.div`
    position: fixed;
    inset: auto 50px 50px auto;
    font-size: 40px;
    color: tan;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;

    &.on{
        opacity: 1;
        visibility: visible;
    }
`
const ToTop = () => {
    const [scr, setScr] = useState(0);

    const ToTopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }

    const scrollHander = () => {
        let sct = window.scrollY;
        setScr(sct);
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollHander);
        return () => {
            window.removeEventListener('scroll', scrollHander);
        }
    }, []);

    return (
        <ToTopWrapper onClick={ToTopHandler} className={scr > 400 ? 'on' : ''}>
            <BsFillArrowUpCircleFill />
        </ToTopWrapper>
    )
}

export default ToTop;