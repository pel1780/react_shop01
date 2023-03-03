import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";
import { Btn, Inner } from "./common";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const MainVisual = ({ DEFAULT_CONTENTS }) => {
    const option = {
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        afterChange: idx => setSNum(idx),
        infinite: true,
    }
    const s = useRef(null);
    //useRef = document.querySelector() useRef는 초기값은 없지만 이벤트가 발생할때 current를 잡아옴
    const [sNum, setSNum] = useState();
    useEffect(() => {
        setSNum(0)
    }, [])
    return (
        <>
            <MainSlide
                className="MainSlide"
                {...option}
                ref={s}>
                {DEFAULT_CONTENTS.map(((slideItm, slideIdx) => {
                    return (
                        <div className={`itm itm0${slideIdx + 1} ${slideIdx == sNum ? 'on' : ''}`}
                        >
                            <Inner className="inner">
                                <h2>{slideItm.tit}</h2>
                                <p>{slideItm.desc}</p>
                                <Link to='/'><Btn color={slideItm.color}>more</Btn></Link>
                            </Inner>
                        </div>
                    )
                }))}
            </MainSlide>
            <div className="arrows">
                {/* {console.log(s.current)} */}
                <button onClick={() => s.current.slickPrev()}>prev</button>
                <button onClick={() => s.current.slickNext()}>next</button>
            </div>
            <div className="num">
                {sNum + 1}  / {DEFAULT_CONTENTS.length}
            </div>
            <ul className="dots">
                {
                    DEFAULT_CONTENTS.map((_, slideIdx) => {
                        return (
                            <li key={slideIdx}><button onClick={() => s.current.slickGoTo(slideIdx)}>{slideIdx + 1}</button></li>
                        )
                    })
                }
            </ul>
        </>
    )
}