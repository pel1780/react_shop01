import styled from "styled-components";
import GlobalNav from "./GlobalNav"

const FooterWrapper = styled.footer`
background: #333;
color: #fff;
`

const Footer = ({ DEFAULT, NAV }) => {
    return (
        <FooterWrapper>
            <GlobalNav NAV={NAV} />
        </FooterWrapper>
    )
}

export default Footer;