import styled from "styled-components";
import homBgSrc from "../../assets/homeBg.png";

const Footer = () => {
  return <Wrapper>Footer</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  min-height: 55vh;
  background: transparent url(${homBgSrc}) no-repeat center center / cover;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
  }
`;

export default Footer;
