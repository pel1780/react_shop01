import styled from "styled-components";
import GlobalNav from "./GlobalNav"

const FooterWrapper = styled.footer`
background: #333;
color: #fff;
`
const FooterTop = styled.div`
`
const FooterBottom = styled.div`
`
const FInner = styled.div`
width: 1200px;
margin: 0 auto;
display: flex;
justify-content: space-between;
`
const Footer = ({ DEFAULT, NAV }) => {
    return (
        <FooterWrapper>
            <FooterTop>
                <FInner></FInner>
            </FooterTop>
            <FooterBottom>
                <FInner></FInner>
            </FooterBottom>
        </FooterWrapper>
    )
}

export default Footer;