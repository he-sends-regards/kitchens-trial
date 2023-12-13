import styled from "styled-components";
import homBgSrc from "../../assets/homeBg.png";
import { Logo, Socials, Typography } from "../../components";
import { COLORS, DEVICE } from "../../style";

const Footer = () => {
  return (
    <Wrapper>
      <Mask />
      <ContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <LinksSection>
          <LinksBlock>
            <LinkBlockTitle>About</LinkBlockTitle>

            <Link>Shop</Link>
            <Link>Plan my kitchen</Link>
            <Link>About us</Link>
            <Link>Gallery</Link>
          </LinksBlock>
          <LinksBlock>
            <LinkBlockTitle>Service</LinkBlockTitle>
            <Link>FAQ</Link>
            <Link>Contact</Link>
            <Link>How to buy</Link>
            <Link>Downloads</Link>
          </LinksBlock>
          <LinksBlock>
            <LinkBlockTitle>Info</LinkBlockTitle>
            <Link>Delivery</Link>
            <Link>Terms</Link>
            <Link>Privacy</Link>
          </LinksBlock>
          <LinksBlock>
            <LinkBlockTitle>Follow</LinkBlockTitle>

            <SocialsStyled />
          </LinksBlock>
        </LinksSection>

        <Typography color="rgba(255, 255, 255,  0.5)">
          Copyright Online MTC Home Kitchens 2018 - All rights reserved.
          <br />
          Responsive website design, Development & Hosting by mtc.
        </Typography>

        <Divider />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 55vh;
  background: transparent url(${homBgSrc}) no-repeat center center / cover;
  overflow: hidden;
`;

const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media ${DEVICE.lg} {
    width: 40%;
  }
`;

const LinkBlockTitle = styled(Typography).attrs({
  color: COLORS.TYPOGRAPHY.WHITE,
  size: "H4",
})`
  margin-bottom: 25px;

  @media ${DEVICE.lg} {
    margin-bottom: 10px;
  }
`;
const Link = styled(Typography).attrs({
  color: COLORS.TYPOGRAPHY.WHITE,
  variant: "LINK",
  textTransform: "uppercase",
})`
  margin: 10px 0;
  opacity: 0.8;
`;

const LinksSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 55vw;
  flex-wrap: wrap;
  text-align: left;

  @media ${DEVICE.lg} {
    width: 60vw;
    text-align: center;
    gap: 20px;
  }
  @media ${DEVICE.md} {
    justify-content: space-around;
    width: 65vw;
  }
  @media ${DEVICE.sm} {
    width: 90vw;
  }
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  z-index: 2;
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;
  justify-content: center;
  align-items: center;
  padding: 40px 17vw 60px 17vw;
  text-align: center;
`;

const Divider = styled.div`
  width: calc(100% + 120px);
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    width: calc(50vw - 17vw);
  }

  &::before {
    left: calc(-50vw + 17vw - 20px);
  }

  &::after {
    right: calc(-50vw + 17vw - 20px);
  }
`;

const SocialsStyled = styled(Socials)`
  margin-top: 10px;
`;

export default Footer;
